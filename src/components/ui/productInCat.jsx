import styledComponents from "styled-components"

const ProductWrapper = styledComponents.div`

padding: 20px 0;
transition: 0.2s ;

&:hover{
    background-color: #d4d4ff;

}


    & .inner_product_wrapper{
        display:flex;
        justify-content: space-around;
        align-items: center;
        direction: rtl;
       padding-bottom: 5;

        & p{
            font-size:16px
        }
    }
`

const ProductInCategory = ({name , price , type}) => {

   

return (
    <ProductWrapper>
        <div className="inner_product_wrapper">
            <p>{name}</p>
            <p>{type}</p>
            <p> {price} ریال</p>
        </div>
    </ProductWrapper>
)
}


export default ProductInCategory