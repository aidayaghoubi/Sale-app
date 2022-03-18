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



console.log(data)
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
                <input type='text' /> 
            </div>
            <div className="item-Wraper">
                <p> ریال{data.price} </p>
            </div>
            <div className="item-Wraper">
                <button>حذف</button>
                <button>...</button>
            </div>
        </div>
    </ProductStyled>
)
}
export default ProductInFactor;