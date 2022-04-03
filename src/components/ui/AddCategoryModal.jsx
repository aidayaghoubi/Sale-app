import { useState } from "react";
import styledComponents from "styled-components";


const ModalLayout = styledComponents.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.8);
z-index:9999;

    & .add_categry_wrraper{
        width: 68%;
        background-color: #fff;
        max-height: 75%;
        position: absolute;
        transition: .3s;
        overflow-y: auto;
        bottom:0;
        left : 17%;
        border-radius: 20px 20px 0 0;
        height: 210px;
            & ._titile{
                padding:15px 25px;
            }

    & .item__container{
        padding:15px 25px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        direction: rtl;

            & .input__eror{
                border: 2px solid red;
                background-color: #ffe5e5;
            }
            & .eror_text{
                color: #e61111;
                font-size: 15px;
            }
            & input{
                height: 25px;
                width: 183px;
                padding: 8px 24px;
                border-radius: 7px;
                font-size: 17px;
                border: 2px solid #b7b7e8;
            }
            & .btn_wrapper{
                        & .__add{
                            padding: 8px 12px;
                            border: none;
                            border: 2px solid #9292ff;
                            color:#000;
                            background-color: transparent;
                            font-size: 17px;
                            margin-left: 16px;   
                            border-radius: 7px;
                            cursor: pointer;

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

const AddCategoryModal = ({ closeHandler , addCategory , setCatName , catName , modalHeight}) => {

    const inputChangeHandler = ({ target : { value } }) => {
        setCatName(value);
        if(catName.trim().length < 2){
            setInputEror(true)
        }else{
            setInputEror(false)
        }
    }
    const [inputEror ,setInputEror ] = useState(false)
    const addCategoryHandler = () => {
        
        if(catName.trim().length > 2){
            addCategory();
            
        }else {
            setInputEror(true)
            setCatName('')
        }
            
    }
    console.log(modalHeight)

    return (
        <ModalLayout style={{top:`${modalHeight}px`}}>
            <div  className="add_categry_wrraper">
            <p className="_titile">افزودن دسته بندی جدید</p>
                <div className="item__container">
                <div>
                    <input 
                        className={inputEror ? "input__eror" : ''}
                        type='text' 
                        value={catName} 
                        placeholder="نام دسته بندی" 
                        onChange={inputChangeHandler}/>
                        {inputEror && <p className="eror_text">نام دسته بندی باید حداقل دارای 3 حرف باشد</p>
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