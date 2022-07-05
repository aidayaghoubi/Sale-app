import { useState, useEffect, useContext } from "react";
import styledComponents from "styled-components";
import { ProductList } from "../../context/productContect";

const Input_list = [
  {
    label: "نام محصول",
    key: "name",
    massage: "نام محصول باید حداقل دارای 3 حرف باشد",
    haveError: false,
  },
  {
    label: "گونه محصول",
    key: "type",
    massage: "گونه محصول باید حداقل دارای 3 حرف باشد",
    haveError: false,
  },
  {
    label: "قیمت محصول",
    key: "price",
    massage: "مقداری ورودی صحیح نمی باشد",
    haveError: false,
  },
];

const ModalLayout = styledComponents.div`

    & .add_categry_wrraper{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;

            & ._titile{
                padding:15px 25px;
            }
            & .input_wrapper{
             
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;

                & .input_Eror{
                    border: 2px solid #9292ff;
                    background-color: #f8f8ff;
                }
                & input{
                    width: 100%;
                    border-radius: 5px;
                    height: 43px;
                    font-size: 14px;
                    direction: rtl;
                    padding: 0 15px;
                    border: 2px solid #acacaf;
                    margin: 11px 0;
                }
                }
                }
            }

 
            & .btn_wrapper{
               
                display: flex;
                justify-content: flex-start;
                margin:30px 0;
                width:100%;
               
                        & .__add{
                            padding: 8px 12px;
                            font-size: 17px;
                            margin-left: 16px;   
                            border-radius: 7px;
                            cursor: pointer;
                            transition: all 0.2s;
                            border: 0px solid #ffffff;
                            color: #fff;
                            background-color: #6d6de8;
                            font-size: 17px;
                            box-shadow: 1px 1px 16px -2px #2b2b9c;
                            margin-right:15px;
                            transition:0.3s;

                            &:hover{
                                box-shadow: none;
                            }

                        }
                & .__cancel{
                    padding: 8px 12px;
                    border: none;
                    background-color: transparent;
                    color: #000;
                    font-size: 17px;
                    cursor: pointer;
            }
            }
}
    
}


`;



const AddItemToCategoryModal = ({ closeHandler, categoryId }) => {
 
  const body = document.querySelector("body");

  const ProductCTx = useContext(ProductList);
  const [input, setInput] = useState({
    name: {
      haveError: true,
    },
    type: {
      haveError: true,
    },
    price: {
      haveError: true,
    },
  });

  const inputChangeHandler = ({ target: { value } }, key, massage) => {
    setInput((prev) => ({
      ...prev,
      [key]: {
        value,
        haveError: value.trim() ? false : true,
        massage,
      },
    }));
  };

  const addItemToCat = () => {
    let canCreate = true;

    for (const property in input) {
      if (input[property].haveError) {
        canCreate = false;
      }
    }

    if (canCreate) {
      body.style.overflow = "auto";
      const { name, type, price } = input;
      ProductCTx.addProduct({
        name: name.value,
        type: type.value,
        price: price.value,
        id: categoryId,
      });
      closeHandler();
    }
  };

  const onClose = () => {
    closeHandler();
    body.style.overflow = "auto";
  };

  
  return (
    <ModalLayout style={{ top: 0 }}>
      <div className="add_categry_wrraper">
        <p className="_titile">افزودن محصول جدید</p>
        <div className="input_wrapper">
          {Input_list.map((el, i) => (
            <input
              type={el.key === "price" ? "number" : "text"}
              className={!input[el.key].haveError ? "input_Eror" : ""}
              placeholder={el.label}
              key={i}
              onChange={(e) => inputChangeHandler(e, el.key, el?.massage || "")}
            />
          ))}
        </div>
        <div className="btn_wrapper">
          <button className="__add" onClick={addItemToCat}>
            افزودن{" "}
          </button>
          <button className="__cancel" onClick={onClose}>
            انصراف
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default AddItemToCategoryModal;
