import styledComponents from "styled-components";
import { useState, useContext } from "react";
import AddItemToCategoryModal from "./addItemToCategory";
import Container from "../Container";
import { ProductList } from "../../context/productContect";
import ProductInCategory from "./productInCat";

const StyledDIV = styledComponents.div`

    // display: flex;
    // align-items: center;
  
    // justify-content: space-between;
    // direction: rtl;

    & .inner_wrapper{
        display: flex;
        align-items: center;
      
        justify-content: space-between;
        direction: rtl;
    }
    & .name_cat_wraper{
        position: relative;
    }
        & p{
            font-size: 24px;
            font-weight: bold;
        
            padding: 12px 37px;
        }
        & .input_change_name{
            
        }
        & .btn_wraper{

            & button{
                
                cursor: pointer;
                border: 1px solid #9292ff;
                padding: 9px 16px;
                background-color: transparent;
                font-size: 15px;
                font-weight: 500;
                border-radius: 4px;
                color: #342f2f;

            }
        }
        & .inner_product_wrapper{
            display:flex;
            justify-content: space-around;
            align-items: center;
            direction: rtl;
            border-bottom: 1px solid;
            border-color: #9090c1;
            padding-bottom: 6px;

            
            & p{
                font-size: 16px;
            }
        }
}
`

const CateoryContaner = ({ product, categoryName, id }) => {

    const [modalShow, setmodalShow] = useState(false);
    const [edit ,setEdit] = useState(false)
    const ProductCTX = useContext(ProductList);
    const [catName,setCatName] = useState(categoryName)

    const productt = ProductCTX.items.filter(el => el.id === id);
    

    function onRemoveBtnHandler () {
        ProductCTX.removeCategory({categoryName , id})
        setEdit(false)
    }
    function onEditNameBtnHandler () {
       
        setEdit(true)
    }

    function onInputChangeHandler ({target :{value}}){
        setCatName(value)
    }

    // function onSaveNameChangeHandler (catName){
    //     console.log(catName)
    // }
    const onSaveNameChangeHandler = () => {
        if(catName === categoryName){

        }else{

            ProductCTX.changeCatName({catName , id});
            setEdit(false)
        }

    }
    const onCancelNameChangeHandler = () => {
        setEdit(false)
    }
    return (
        <Container>
            <StyledDIV>
                <div className="inner_wrapper">
                    <div className="name_cat_wraper">
                        <p className="category_title">{categoryName}</p>
                        {edit && <div className="input_change_name"> 
                            <input 
                            type='text'
                            value={catName}
                            onChange={onInputChangeHandler}
                            />
                            <button onClick={onSaveNameChangeHandler}>ذخیره</button>
                            <button onClick={onCancelNameChangeHandler}>انصراف</button>
                             </div>}
                        <button onClick={onRemoveBtnHandler}>حذف</button>
                        <button onClick={onEditNameBtnHandler}>ویرایش</button>
                    </div>
                    <div className="btn_wraper">
                        <button onClick={setmodalShow}>
                            محصول جدید
                        </button>
                    </div>

                    {modalShow && <AddItemToCategoryModal
                        categoryId={id}
                        closeHandler={() => setmodalShow(false)}
                    />}
                </div>
                {
                    (productt[0].product.length !== 0) &&
                    <div className="inner_product_wrapper">
                        <p>نام</p>
                        <p>گونه</p>
                        <p>قیمت</p>
                    </div>

                }

            </StyledDIV>

            {productt[0].product.map((el , i) =>
                <ProductInCategory key={i}
                    {...el}
                />)
            }
        </Container>
    )
}
export default CateoryContaner;