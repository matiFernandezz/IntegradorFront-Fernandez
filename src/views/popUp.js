/* Manejo el PopUp*/

import { productoActivo, setProductoActivo } from "../../main";

//Abrir y cerrar Modal
export const openModal = () =>{
    const modal = document.getElementById("popUpModal");
    modal.style.display = "flex";
    
    const buttonDelete  = document.getElementById("eliminarBoton");
    if (productoActivo){
        buttonDelete.style.display  =  "block";
        
    }else{
        buttonDelete.style.display  =  "none";
    }



    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen  = document.getElementById("imagen"),
        precio =  document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value =  productoActivo.categoria;
    }
};

export const closeModal = () =>{
    const modal = document.getElementById("popUpModal");
    modal.style.display = "none";
    setProductoActivo(null);
    cleanModal();
};

const cleanModal  = () =>{
    const nombre = document.getElementById("nombre"),
    imagen  = document.getElementById("imagen"),
    precio =  document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    nombre.value =  "";
    imagen.value = "";
    precio.value = "";
    categoria.value = "Seleccione la Categoría";
}