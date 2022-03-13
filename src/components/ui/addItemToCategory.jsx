import { useState , useEffect, useContext } from "react";
import styledComponents from "styled-components";
import { ProductList } from "../../context/productContect";


const ModalLayout = styledComponents.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.8);
z-index:9999;

    & .add_categry_wrraper{
        width: 65%;
        background-color: #fff;
        max-height: 75%;
        position: absolute;
        transition: .3s;
        overflow-y: auto;
        bottom:0;
        left : -5%;
        border-radius: 20px 20px 0 0;
        height: 450px;
            & ._titile{
                padding:15px 25px;
            }
            & .input_wrapper{
                width: 90%;
                background-color: #fff;
                height: auto;
                padding: 1.6rem;
                border-radius: 20px 20px 0 0;
                display: block;
                -webkit-align-self: flex-end;
                align-self: flex-end;
                max-height: 75%;
                transition: .3s;
                overflow-y: auto;

                & input{
                    outline: none;
                    border-radius: 5px;
                    border: 2px solid silver;
                    padding: 0.5rem;
                    text-align: right;
                    -webkit-transition: .3s;
                    transition: .3s;
                    width: 95%;
                    margin: 3px 0;
                    height: 36px;
                    font-size: 20px;
                }
            }

 
            & .btn_wrapper{
               
                display: flex;
                justify-content: flex-end;
                transform: translateX(93px);
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

const AddItemToCategoryModal = ({ closeHandler , categoryId }) => {

    const [newItem , setnewItem] = useState('');
    const ProductCTx = useContext(ProductList);

    const inputChangeHandler = (e) => {
        setnewItem(e.target.value);
    }

    const addItemToCat = () => {
        ProductCTx.addProduct({
            name : newItem ,
            id : categoryId ,
        })
        closeHandler()
    }



    return <ModalLayout >
            <div  className="add_categry_wrraper">
            <p className="_titile">افزودن محصول جدید</p>
            <div className="input_wrapper">
            <input type='text' placeholder="نام محصول " onChange={inputChangeHandler}/>
            {/* <input type='text' placeholder="گونه محصول " />
            <input type='text' placeholder="قیمت محصول" /> */}
            </div>
                    <div className="btn_wrapper">
                        <button className="__add" onClick={addItemToCat}>افزودن </button>
                        <button className="__cancel" onClick={closeHandler}>انصراف</button>
                    </div>
            
            </div>
    </ModalLayout>    
}

export default AddItemToCategoryModal;