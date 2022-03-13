import styledComponents from "styled-components";
import { useContext } from "react";
import { ProductList } from "../context/productContect";
import Container from "./Container";


const EmpytBoxWrapper=styledComponents.div` 
display: flex;
    align-items: center;
    justify-content: center;
    border: #a6a6d0 2px dashed;
    border-radius: 10px;
    height: 93px;

    & p{
        font-size: 18px;
    color: #a6a6d0;
    }

`

const EmptyProductState = () => {
    
const ProductCTX = useContext(ProductList);


return <Container>

<EmpytBoxWrapper>
        <p>شما هیچ محصولی ندارید.ابتدا دسته ای اضافه و سپس به آن محصول وارد کنید</p>
</EmpytBoxWrapper>
</Container>

}
export default EmptyProductState