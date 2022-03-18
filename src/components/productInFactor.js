import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductStyled = styled.div`
width: 100%;


& .item_container{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & .input_wraper{
        width: 42%;
    }
  & .item-Wraper{
    width: 12%;
    }
    & .amount{
        width: 8%;
    }
}
`;

const ProductInFactor = ({data , changePnum , setProductType ,deletProduct , changePprice , num}) => {

     const [amout,setAmount]= useState(1)

    const onRemoveItem = () => {
        deletProduct({data , num})
    }
    const AmountInputHandler = ( {target :{value}})=>{
        if(value >= 1){
            setAmount(parseInt(value));
        }
       
      console.log(amout , value ,' whist')
    }
    useEffect(()=>{
        changePnum({num , amout})
    },[amout])
return (
    <ProductStyled>
        <div className="item_container">
            <div className="item-Wraper">
                {num +1}
            </div>
            <div className="item-Wraper">
                <p>{data.name}</p>
            </div>
            <div className="input_wraper type">
                <input type='text' /> 
            </div>
            <div className="input_wraper amount">
                <input 
                type='number' 
                value={amout}
                onChange={AmountInputHandler}
                /> 
            </div>
            <div className="item-Wraper">
                <p> ریال{data.totalPrice} </p>
            </div>
            <div className="item-Wraper">
                <button onClick={onRemoveItem}>حذف</button>
                <button>...</button>
            </div>
        </div>
    </ProductStyled>
)
}
export default ProductInFactor;