import Title from "../components/pageTitle";
import Container from "../components/Container";
import FactorInputes from "../components/factorInput";
import { useState } from "react";
import ProductSearch from "../components/productSearch";
import ProductInFactor from "../components/productInFactor";
import ProiorityFaactor from "../components/priorityFactor";
import MoreINformationInFactor from "../components/moreInformFactor";
import ItemWraper from "../components/ui/itemInFactorWrap";


const NewFactor = () => {

    const [selectedItems, setselectedItems] = useState([]);
    const [proierity ,setProierity] = useState(1)


    function productThatSold(item) {
        setselectedItems(prev => [...prev, { ...item, amount: 1, totalPrice: parseInt(item.price) }]);

    }
    function changeProductPrice({ num, price }) {
       
        setselectedItems(prev => prev.map((el, i) => i === num ? { ...el, price: price, totalPrice: price * el.amount } : el))
    }
    function changeProductNumber({ num, amout }) {
       
        setselectedItems(prev => prev.map((el, i) => i === num ? { ...el, amount: amout, totalPrice: el.price * amout } : el))

    }
    function setProductType({ num, value }) {

        setselectedItems(prev => prev.map((el, i) => i === num ? { ...el, type: value } : el))
    }
    const deletProductFromFactor = ({ data, num }) => {
        setselectedItems(prev => prev.filter((el, i) => i !== num))
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
        <ItemWraper>
            <MoreINformationInFactor />
            <ProiorityFaactor proierity={setProierity}/>
        </ItemWraper>

    </Container>
}
export default NewFactor
