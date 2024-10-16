// Vista de Categorias

import { categoriaActiva } from "../../main";
import { GetProductsLocalStorage } from "../persistence/localStorage";
import { renderList } from "../views/store";

const filtroProductosPorCategoria = (categoryIn) => {
    const products = GetProductsLocalStorage();

    switch  (categoryIn) {
        case  categoriaActiva:
            renderList(products);
        break;
        case "Todo":
            renderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
        case "Combos":
            const result =  products.filter(product => product.categoria === categoryIn);
            renderList(result);
        default:
        break;
        case "mayorPrecio":
        const resultPrecio = products.sort ((a, b) => b.precio - a.precio);
        renderList(resultPrecio);
        break;
        case "menorPrecio":
        const  resultPrecio2 = products.sort ((a, b) => a.precio - b.precio);
        renderList(resultPrecio2);
        break;
    }

}



export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulList = document.getElementById("Filtro");
    //creamos elementos dentro de la lista
    ulList.innerHTML =  `
    <li id= "Todo">Todos los productos</li>
    <li id= "Hamburguesas">Hamburguesas</li>
    <li id= "Papas">Papas</li>
    <li id= "Gaseosas">Gaseosas</li>
    <li id= "Combos">Combos</li>
    <li id= "mayorPrecio">Mayor Precio</li>
    <li id= "menorPrecio">Menor Precio</li>
    `;
    // añadimos el evento click 
    const  liElements = ulList.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener("click", ()=>{
           handleClick(liElement);
            
        })
    })
    // le ponemos estilo al elemento que esta activo
    const handleClick = (elemento) => {
        filtroProductosPorCategoria(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            } else {
                if(elemento=== el){
                    el.classList.add('liActive');
                }
            }
        })

    }
};