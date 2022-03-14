import { createContext, useState } from "react";

export const ProductList = createContext()
const PRODUCT_STORAGE_KEY = "product";


const ProductLIstPrivder = ({children}) => {

    const [state, setState] = useState([])

    function addCategory(categoryName = "") {

        const newCreatedCategory = {
            categoryName, 
            product : [],
            id: Date.now()
        }

        setState(prev => [ ...prev , newCreatedCategory]);
    }

 

    function addProduct(item) {        
        setState(prev => prev.map(el => el.id === item.id ? { ...el , product:[...el.product , { ...item , id : Date.now() }] } : el ))
    }

    console.log(state);

    return <ProductList.Provider value={{ items : state , addCategory , addProduct}}>
{children}
    </ProductList.Provider>
}

export default ProductLIstPrivder;