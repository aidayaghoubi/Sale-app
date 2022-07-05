import Title from "../components/pageTitle";
import Container from "../components/Container";
import EmptyProductState from "../components/exptyProductPage";
import AddProduct from "../components/addProduct";
import { useContext, useEffect, useState } from "react";
import AddCategoryModal from '../components/ui/AddCategoryModal.jsx';
import { ProductList } from "../context/productContect";
import { Drawer } from "antd";
import styledComponents from 'styled-components'
import CategoryContainer from "../components/ui/CategoryContainer"

const ModalLayout = styledComponents.div`

position: absolute;
top: 0;
left: 0;
width: 100%;
transition: .3s;
height: 100vh;
background-color: rgba(0,0,0,0.8);
z-index:9999;

    & .add_category_wrapper{
        width: 50%;
        background-color: #fff;
        max-height: 92%;
        position: absolute;
        -webkit-transition: .3s;
        transition: .3s;
        overflow-y: auto;
        bottom: 0;
        left: 25%;
        border-radius: 20px 20px 0 0;
        height: 205px; 

            & ._title{
                padding:15px 25px;
                padding: 15px 25px;
                text-align: right;
                font-size: 16px;
                font-weight: 900;
            }

    & .item__container{
        padding:15px 25px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        direction: rtl;

            & .input__error{
                border: 2px solid red;
                background-color: #ffe5e5;
            }
            & .error_text{
                color: #e61111;
                font-size: 15px;
            }
            & input{
                height: 25px;
                width: 280px;
                padding: 8px 24px;
                border-radius: 7px;
                font-size: 17px;
                border: 2px solid #b7b7e8;
            }
            & .btn_wrapper{
                        & .__add{
                            padding: 8px 12px;
                            border: none;
                            border: 0px solid #ffffff;
                            color: #fff;
                            background-color: #6d6de8;
                            font-size: 17px;
                            box-shadow: 1px 1px 16px -2px #2b2b9c;
                            margin-left: 16px;
                            border-radius: 7px;
                            cursor: pointer;
                            transition:0.2s;

                            &:hover{
                                box-shadow: none;
                            }
                        }
                & .__cancel{
                    padding: 8px 12px;
                    border: none;
                    background-color: transparent;
                    color:#000;
                    font-size: 17px;    
                    cursor: pointer;
            }
            }
}
    
}


`




const Product = () => {

    const [modalHeight, setModalHeight] = useState(0)
    const [inputError, setInputError] = useState(false)
    const [visible, setVisible] = useState(true);
    const [addClicked, setAddClicked] = useState(false);
    const [catName, setCatName] = useState('');

    const body = document.querySelector('body');

    const ProductCtx = useContext(ProductList)


    const AddModal = () => {
        setAddClicked(true);
        body.style.overflow = 'hidden'
    }
    const closeModal = () => {
        setAddClicked(false);
        body.style.overflow = 'auto';
    }
  

    const addCategoryHandler = () => {

        ProductCtx.addCategory(catName);
        setCatName('');
        closeModal();
    }

 

    
    const inputChangeHandler = ({ target: { value } }) => {
        setCatName(value);
        if (catName.trim().length < 2) {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }
    const addCategoryHandlerModal = () => {

        if (catName.trim().length > 2) {
            addCategoryHandler();
            setVisible(false);

        } else {
            setInputError(true)
            setCatName('')
        }

    }


    return <Container>
        <Title name="محصولات" />
        {!ProductCtx.items.length && <EmptyProductState />}

        {ProductCtx.items.map((el, i) => <CategoryContainer {...el} key={i} />)}
        <AddProduct add={AddModal} />


        <Drawer

            placement={'right'}
            width={500}
            // onClose={closeHandler}
            visible={addClicked}
            closable={false}

        >
            <ModalLayout>
                <div className="add_cateory_p">
                    <p className="_title">افزودن دسته بندی جدید</p>
                    <div className="item__container">
                        <div>
                            <input
                                className={inputError ? "input__error" : ''}
                                type='text'
                                value={catName}
                                placeholder="نام دسته بندی"
                                onChange={inputChangeHandler} />
                            {inputError && <p className="error_text">نام دسته بندی باید حداقل دارای 3 حرف باشد</p>
                            }
                        </div>
                        <div className="btn_wrapper">
                            <button className="__add" onClick={addCategoryHandlerModal}>افزودن دسته بندی</button>
                            <button className="__cancel" onClick={closeModal}>انصراف</button>
                        </div>

                    </div>
                </div>
            </ModalLayout>
        </Drawer>

        {/* {addClicked && <AddCategoryModal
            catName={catName}
            setCatName={setCatName}
            closeHandler={closeModal}
            addCategory={addCategoryHandler}
            modalHeight={modalHeight}
            addProductHandler={addProductHandler} />} */}

    </Container>
}
export default Product