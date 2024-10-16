// Manejo la LocalStorage
// Traigo los productos
export const GetProductsLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    return  products ? products : [];

}

//Guardo los productos 
export const  SetProductsLocalStorage = (product) => {
    //traer los elementos  existentes
    let productsInLocal = GetProductsLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal)=>  productsLocal.id === product.id);
    //Verificar si existe
    if(existingIndex  !== -1){
        //Si existe se reemplaza
        productsInLocal[existingIndex] = product;
    }else{
        //Sino, se agrega 
        productsInLocal.push(product);
    }

    //Seteamos el array con el producto modificado o con el nuevo producto
    localStorage.setItem("products", JSON.stringify(productsInLocal))
}
