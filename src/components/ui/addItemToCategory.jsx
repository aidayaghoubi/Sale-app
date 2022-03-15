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

                & .input_Eror{
                    border: 2px solid #9292ff;
                    background-color: #f8f8ff;
                }
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


`;

const Input_list = [
    {
        label:'نام محصول',
        key : 'name',
        massage:'نام محصول باید حداقل دارای 3 حرف باشد',
        haveError:false
    },
    {
        label:'گونه محصول',
        key : 'type' , 
        massage:'گونه محصول باید حداقل دارای 3 حرف باشد',
        haveError:false
    },
    {
        label:'قیمت محصول',
        key : 'price' ,
        massage:'مقداری ورودی صحیح نمی باشد',
        haveError:false
    }
]

const AddItemToCategoryModal = ({ closeHandler , categoryId }) => {

    
    const ProductCTx = useContext(ProductList);
    const [input , setInput] = useState({

          name:{
              haveError:true
          },
          type:{
            haveError:true
        },
        price:{
            haveError:true
        }
    })

    const inputChangeHandler = ({target :{ value }} , key , massage) => {

        setInput(prev =>({
            ...prev,
            [key]:{
                value,
                haveError:value.trim() ? false : true ,
                massage
            }
           
        }))

        



    }

    const addItemToCat = () => {

        let canCreate = true;

        for(const property in input){
            if(input[property].haveError){
                canCreate = false
            }
        }

       
        if(canCreate){
            const{name , type , price} = input;
            ProductCTx.addProduct({
                name : name.value ,
                 type:type.value,
                 price:price.value,
                 id : categoryId ,
            });
            closeHandler()
            
        }


       
    }

    

    return <ModalLayout>
            <div  className="add_categry_wrraper">
            <p className="_titile">افزودن محصول جدید</p>
            <div className="input_wrapper">
           
            {
            Input_list.map((el , i) => (
                
                <input 
                    type='text' 
                    className={!input[el.key].haveError ? "input_Eror" : ''}
                    placeholder={el.label} 
                    key={i} 
                    onChange={e => inputChangeHandler(e , el.key , el?.massage || "" )} 
            />
            ))
            }
            </div>
                    <div className="btn_wrapper">
                        <button className="__add" onClick={addItemToCat}>افزودن </button>
                        <button className="__cancel" onClick={closeHandler}>انصراف</button>
                    </div>
            
            </div>
    </ModalLayout>    
}

export default AddItemToCategoryModal;