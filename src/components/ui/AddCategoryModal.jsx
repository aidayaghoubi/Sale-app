import { useState } from "react";
import styledComponents from "styled-components";
import { Drawer } from "antd";


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

const AddCategoryModal = ({ closeHandler, addCategory, setCatName, catName, modalHeight }) => {

    const [inputError, setInputError] = useState(false)
    const [visible, setVisible] = useState(true);

    const inputChangeHandler = ({ target: { value } }) => {
        setCatName(value);
        if (catName.trim().length < 2) {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }
    const addCategoryHandler = () => {

        if (catName.trim().length > 2) {
            addCategory();
            setVisible(false);

        } else {
            setInputError(true)
            setCatName('')
        }

    }
    const onClose = () => {
        setVisible(false);
        closeHandler();
      };
 
    return (
        <ModalLayout style={{ top: `${modalHeight}px` }}>
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
                        <button className="__add" onClick={addCategoryHandler}>افزودن دسته بندی</button>
                        <button className="__cancel" onClick={closeHandler}>انصراف</button>
                    </div>

                </div>
            </div>
        </ModalLayout>
    )
}

export default AddCategoryModal;