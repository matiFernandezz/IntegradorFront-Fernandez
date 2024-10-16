
import { SearchProductBySearch } from "./src/services/buscar";
import { renderCategories } from "./src/services/categories";
import { deleteProduct } from "./src/services/productos";
import { closeModal, openModal } from "./src/views/popUp";
import { getProductosToStore } from "./src/views/store";
import './style.css'

/*Aplicacion*/
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};



getProductosToStore();
renderCategories() ;

// Header Agregar elementos

const buttonAdd = document.getElementById("btnAdd");
buttonAdd.addEventListener('click', ()=>{
    openModal();
});

const buttonCancel = document.getElementById("cancelarBoton")
buttonCancel.addEventListener('click', ()=>{
    closeModal();
});

const buttonDelete =  document.getElementById("eliminarBoton")
buttonDelete.addEventListener('click', ()=>{
    deleteProduct();
});

// Header Boton Buscar
const botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener('click', ()=>{
    SearchProductBySearch();
})

