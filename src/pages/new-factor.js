import Title from "../components/pageTitle";
import Container from "../components/Container";
import FactorInputes from "../components/factorInput";
import { useState } from "react";
import ProductSearch from "../components/productSearch";
import ProductInFactor from "../components/productInFactor";


const NewFactor = () => {

    const [selectedItems, setselectedItems] = useState([])


    function productThatSold(item) {
        setselectedItems(prev => [...prev, item]);
        console.log('de')
    }
    function changeProductPrice() {

    }
    function changeProductNumber() {

    }
    function setProductType() {

    }
    function deletProductFromFactor() {

    }

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