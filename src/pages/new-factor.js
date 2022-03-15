import Title from "../components/pageTitle";
import Container from "../components/Container";
import FactorInputes from "../components/factorInput";
import { useState } from "react";
import ProductSearch from "../components/productSearch";


const NewFactor = () => {

    const [selectedItems, setselectedItems] = useState([])


    function productThatSold(item) {
        setselectedItems(prev => [...prev , item])
    }
   const items = selectedItems.map(el=>{
    return el
    });
    

    return <Container>
        <Title name="فاکتور" />
        <FactorInputes />
        <ProductSearch
            addItem={productThatSold} />
          
    </Container>
}
export default NewFactor