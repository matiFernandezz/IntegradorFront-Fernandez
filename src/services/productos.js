//PRODUCTOS
import Swal  from 'sweetalert2';

import { productoActivo } from "../../main";
import { GetProductsLocalStorage, SetProductsLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/popUp";
import { getProductosToStore, renderList } from "../views/store";


//Guardar o modificar elemento

const acceptButton = document.getElementById("aceptarBoton");

acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyElements();
})
//Funcion para guardar o modificar elemento
const handleSaveOrModifyElements = () =>{
    const nombre = document.getElementById("nombre").value,
    imagen  = document.getElementById("imagen").value,
    precio =  document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;

    let object = null;
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        }
    }else{
        object =  {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }
    Swal.fire({
        title: "Guardado!",
        text: "El producto fue guardado con éxito!",
        icon: "success"
      });
    SetProductsLocalStorage(object);
    getProductosToStore();
    closeModal();
}

// Logica para eliminar un elemento 
export const deleteProduct = () => {

    Swal.fire({
        title: "¿Estás Seguro?",
        text: "El producto se eliminará definitivamente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, elminar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = GetProductsLocalStorage();
            const result = products.filter((element)=> element.id !==  productoActivo.id);
            //seteamos el nuevo array 
            localStorage.setItem("products"  , JSON.stringify(result));
            //Traemos de nuevo nuestros productos actualizados 
            const products2 = GetProductsLocalStorage();
            renderList(products2);
            closeModal();
          Swal.fire({
            title: "Eliminado!",
            text: "El producto fue eliminado con éxito!",
            icon: "success"
          });
        }
      });





  
}