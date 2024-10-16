// Aqui manejo la Store de la Pagina

import {  setProductoActivo } from "../../main";
import { GetProductsLocalStorage } from "../persistence/localStorage"
import { openModal } from "./popUp";

//Funcion que trae elementos y llama al Render
export const getProductosToStore = () => {
    const productos = GetProductsLocalStorage();
    renderList(productos);
}

// Funcion que filtra y renderiza la seccion con todos sus elementos
export const renderList = (productosIn) => {
    //  Filtrar productos por categoria

    const hamburguesas =  productosIn.filter((producto) => producto.categoria === "Hamburguesas");
    const papas =  productosIn.filter((producto) => producto.categoria === "Papas");
    const gaseosas  = productosIn.filter((producto) => producto.categoria === "Gaseosas");
    const combos  = productosIn.filter((producto) => producto.categoria === "Combos");


    //Renderizar los elementos de la seccion 
    const renderProductGroup = (productos, title) => {
        if(productos.length  > 0) {
                //Retornamos la seccion con todos los elementos 
                return `
                <section class='sectionStore'>
                    <h3>${title}</h3>
                    <div class="containerProductStore">
                        ${productos.map((producto, index) => `
                            <div class="contenedorCards" id='product-${producto.categoria}-${index}'>
                                <div>
                                    <img src="${producto.imagen}" />
                                    <div>
                                        <h2>${producto.nombre}</h2>
                                    </div>
                                    <div>
                                        <p><b>Precio:</b> $${producto.precio}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </section>
            `;

        }else  {
            return ""
        }

    };
    //Renderizamos cada uno de los productos dentro de su categoria 

        const appContainer = document.getElementById("store");
        appContainer.innerHTML = `
        ${renderProductGroup(hamburguesas,  "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas,  "Gaseosas")}
        ${renderProductGroup(combos, "Combos")}
        
        `;

        //Añadimos eventos de manera dinamica a cada producto 

        const addEvents = (productosIn)  => {
            if(productosIn){
                productosIn.forEach((element,index)=>{
                    const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                    productContainer.addEventListener("click", () => {
                        setProductoActivo(element);
                        openModal();
                    });
                })
            }
        
         }
         addEvents(hamburguesas);
         addEvents(papas);
         addEvents(gaseosas);
         addEvents(combos);
         
         
};


