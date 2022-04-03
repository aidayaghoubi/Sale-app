import { createContext, useEffect, useState } from "react";

export const ProductList = createContext()
const PRODUCT_STORAGE_KEY = "product";


const ProductLIstPrivder = ({ children }) => {

    // const [state, setState] = useState(()=>{

    //     const itemsInLocal = localStorage.getItem(PRODUCT_STORAGE_KEY);
    //     return [
    //        itemsInLocal ? JSON.parse(itemsInLocal) : [],
    //     ]
    // })

    //    const [state, setState]= useState([]);
    const [state , setState] = useState(()=>{
        const productInLocal = localStorage.getItem(PRODUCT_STORAGE_KEY);
        return productInLocal ? JSON.parse(productInLocal) : []
       
    })

    const addCategory = (categoryName = "") => {
        setState(prev => [
            ...prev , 
            {
                categoryName , 
                product:[],
                id:Date.now()
            }
        ])
    }
    const removeCategory = (props) => {
        
        setState(prev => prev.filter(el => el.id !== props.id))

    }
    //item => object == name , id
    //prev => array of object
    // el is object == categoryname , product
    // product array of object

    const addProduct = (item) => {
        setState(prev => 
            prev.map(el => el.id === item.id ? 
                {...el , product:
                    [...el.product , {...item , id:Date.now()}]} : el))
       
    }

    const changeCatName = (item) => {

        setState(prev => 
            prev.map(el => el.id === item.id ? 
                {...el , categoryName:item.catName } : el))
     }

    useEffect(()=>{
        localStorage.setItem(PRODUCT_STORAGE_KEY , state.length ? JSON.stringify(state) : '')
    } , [state]);

  
   
    return <ProductList.Provider value={{
         items: state,
          addCategory, 
          addProduct , 
          changeCatName ,
          removeCategory
           }}>
        {children}
    </ProductList.Provider>
}

export default ProductLIstPrivder;