import styledComponents from "styled-components";
import { ProductList } from "../context/productContect";
import { useContext, useState, useEffect } from "react";
import SearchedItemREsult from "./itemSearchReasult";

const SearchWrapper = styledComponents.div`

width: 464px;
margin: -6px 11px;
border-radius: 5px;
border: 2px solid;
border-color: #babaf7;
display: flex;
flex-direction: column;
align-items: center;

        & p{
            color: #aba5a5;
            font-size: 17px;
            margin-top: 6px;
        }
        & .product_wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom:15px;
        }
`


const SearchModal = ({ searchedItem , addingItem}) => {

    const ProductCTX = useContext(ProductList);
    const [items, setItems] = useState([])

    const SearchedList = ProductCTX.items.map(el => (el.product))

    
    

    useEffect(() => {
        if(searchedItem){

            const itemsss = SearchedList.map(el => {
                return el.filter(i => {
                    if (i.name.toLowerCase().includes(searchedItem.toLowerCase())) {
                        return i
                    }
                })
            });
            setItems(itemsss);
        }

    }, [searchedItem])

   const itemShuoldAdd= (prop) =>{
    addingItem(prop)
   }

    return (
        <SearchWrapper>
            <p>در جست و جوری محصول</p>
            <div className="product_wrapper">
                {items.map((el) => {
                    return el.map((eleman, i) => {
                        return <SearchedItemREsult 
                        key={i} 
                        productName={eleman}
                        onAddItem={itemShuoldAdd}
                        />
                    })

                })}
            </div>
        </SearchWrapper>
    )
}
export default SearchModal;