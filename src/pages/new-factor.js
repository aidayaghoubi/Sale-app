import Title from "../components/pageTitle";
import Container from "../components/Container";
import FactorInputes from "../components/factorInput";
import { useState } from "react";
import ProductSearch from "../components/productSearch";
import ProductInFactor from "../components/productInFactor";


const NewFactor = () => {

    const [selectedItems, setselectedItems] = useState([])


    function productThatSold(item) {
        setselectedItems(prev => [...prev, { ...item, amount: 1, totalPrice :parseInt(item.price)}]);

    }
    function changeProductPrice() {

    }
    function changeProductNumber({num , amout}) {
        console.log(amout)
         setselectedItems(prev => prev.map( (el , i) => i === num ? {...el , amount:amout , totalPrice :el.price * amout } : el))
      
    }
    function setProductType() {

    }
    const deletProductFromFactor = ({data , num}) => {
        setselectedItems(prev => prev.filter( (el , i) => i !== num))
    }
console.log(selectedItems)
    return <Container>
        <Title name="فاکتور" />
        <FactorInputes />
        <ProductSearch
            addItem={productThatSold} />
        {selectedItems.map((el, i) => <ProductInFactor
            key={i}
            data={el}
            num={i}
            changePnum={changeProductNumber}
            setProductType={setProductType}
            deletProduct={deletProductFromFactor}
            changePprice={changeProductPrice}
        />)}
    </Container>
}
export default NewFactor