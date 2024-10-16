import { GetProductsLocalStorage } from "../persistence/localStorage";
import { renderList } from "../views/store";

export const SearchProductBySearch = () => {
    const inputHeader  = document.getElementById('inputHeader');
    const products = GetProductsLocalStorage()

    const results =products.filter((el)=> 
    el.nombre.toLowerCase().includes(inputHeader.value)
);
renderList(results);

}