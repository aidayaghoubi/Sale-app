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
        display: flex;
        width: 48%;
        align-items: center;

        &:hover{
            & .control_btn{
                opacity: 1;
            }
        }
    }
        & p{
            font-size: 24px;
            font-weight: bold;
        
            padding: 12px 37px;
        }
        & .input_change_name{
            position: absolute;
            background-color: #fff;
            height: 45px;
            display: flex;
            z-index: 99999;
            align-items: center;

           & button{
            background-color: transparent;
            border: none;
            margin: 0 18px;
            opacity: 0;
            -webkit-transition: .3s;
            transition: .3s;
            cursor: pointer;
           }
           &:hover{
            & button{
                opacity: 1;
            }
           }
           & input{
            outline: none;
            border-radius: 5px;
            border: 2px solid silver;
            padding: 0.5rem;
            text-align: right;
            font-size: 20px;
            padding: 12px 37px;
            -webkit-transition: .3s;
            transition: .3s;
            width: 38%;
           }
        }
        & .control_btn{
            background-color: transparent;
            border: none;
            margin-right: 6px;
            margin-left: 9px;
            opacity: 0;
            transition: .3s;
            cursor: pointer;
        }
        & .btn_wraper{

            & button{
                
                cursor: pointer;
                border: 2px solid #686161;
                padding: 9px 16px;
                background-color: transparent;
                font-size: 17px;
                font-weight: 600;
                border-radius: 4px;
                color: #686161;

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
    const [edit, setEdit] = useState(false)
    const ProductCTX = useContext(ProductList);
    const [catName, setCatName] = useState(categoryName)

    const productt = ProductCTX.items.filter(el => el.id === id);


    function onRemoveBtnHandler() {
        ProductCTX.removeCategory({ categoryName, id })
        setEdit(false)
    }
    function onEditNameBtnHandler() {

        setEdit(true)
    }

    function onInputChangeHandler({ target: { value } }) {
        setCatName(value)
    }

    // function onSaveNameChangeHandler (catName){
    //     console.log(catName)
    // }
    const onSaveNameChangeHandler = () => {
        if (catName === categoryName) {

        } else {

            ProductCTX.changeCatName({ catName, id });
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
                        {
                        edit && <div className="input_change_name">
                            <input
                                type='text'
                                value={catName}
                                onChange={onInputChangeHandler}
                            />
                            <button onClick={onCancelNameChangeHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                    <g id="Group_5" data-name="Group 5" transform="translate(0 -0.382)">
                                        <rect id="Rectangle_3" data-name="Rectangle 3" width="15" height="15" transform="translate(0 0.382)" fill="none" />
                                        <g id="tick" transform="translate(2.04 2.04)">
                                            <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
                                                <path id="Path_1" data-name="Path 1" d="M17.372,32.745l11.3,11.3m0-11.3-11.3,11.3" transform="translate(-17.372 -32.745)" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <button onClick={onSaveNameChangeHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.416" height="15" viewBox="0 0 15.416 15">
                                    <g id="Group_4" data-name="Group 4" transform="translate(0.017 -0.382)">
                                        <rect id="Rectangle_4" data-name="Rectangle 4" width="15" height="15" transform="translate(0.311 0.382)" fill="none" />
                                        <g id="tick" transform="translate(1.397 3.378)">
                                            <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
                                                <path id="Path_1" data-name="Path 1" d="M14.137,6.667l3.96,3.96L26.724,2" transform="translate(-14.137 -2)" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                            </button>
                        </div>
                        }
                        <button onClick={onEditNameBtnHandler} className="control_btn" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <g id="Group_1" data-name="Group 1" transform="translate(-721 -492)">
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width="28" height="28" transform="translate(721 492)" fill="none" />
                                    <path id="edit" d="M23.634,2.853a3.741,3.741,0,0,1,0,5.291L9.817,21.961a4.676,4.676,0,0,1-2.173,1.23L3.359,24.262a.935.935,0,0,1-1.134-1.134L3.3,18.843a4.677,4.677,0,0,1,1.23-2.172L18.343,2.853A3.741,3.741,0,0,1,23.634,2.853ZM17.021,6.821,5.849,17.993a2.806,2.806,0,0,0-.738,1.3L4.418,22.07l2.773-.693a2.806,2.806,0,0,0,1.3-.738L19.666,9.466Zm2.646-2.645L18.343,5.5l2.645,2.645,1.323-1.322a1.871,1.871,0,1,0-2.645-2.645Z" transform="translate(721.537 492.976)" fill="#212121" />
                                </g>
                            </svg>
                        </button>
                        <button onClick={onRemoveBtnHandler} className="control_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <g id="Group_2" data-name="Group 2" transform="translate(-688 -492)">
                                    <rect id="Rectangle_1" data-name="Rectangle 1" width="28" height="28" transform="translate(688 492)" fill="none" />
                                    <path id="delete" d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1a1,1,0,0,1,1,1Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9,3.3,3.3,0,0,1-.256.944Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z" transform="translate(686 490.26)" fill="#212121" />
                                </g>
                            </svg>
                        </button>
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

            {productt[0].product.map((el, i) =>
                <ProductInCategory key={i}
                    {...el}
                />)
            }
        </Container>
    )
}
export default CateoryContaner;