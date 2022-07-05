import Title from "../components/pageTitle";
import Container from "../components/Container";
import EmptyProductState from "../components/exptyProductPage";
import AddProduct from "../components/addProduct";
import { useContext, useEffect, useState } from "react";
import AddCategoryModal from "../components/ui/AddCategoryModal.jsx";
import { ProductList } from "../context/productContect";
import styledComponents from "styled-components";
import 'antd/dist/antd.css';
import { Drawer } from "antd";
import CategoryContainer from "../components/ui/CategoryContainer";

const ModalLayout = styledComponents.div`



    & .add_category_wrapper{
        width: 50%;
        margin:0 auto;
        -webkit-transition: .3s;
        transition: .3s;
        overflow-y: auto;
        bottom: 0;
        left: 25%;
        border-radius: 20px 20px 0 0;
       height:280x;

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
                height:45px;
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


`;

const Product = () => {
 
  const [inputError, setInputError] = useState(false);
  const [addClicked, setAddClicked] = useState(false);
  const [catName, setCatName] = useState("");

 
  const ProductCtx = useContext(ProductList);

  const AddModal = () => {
    setAddClicked(true);
  };
  const closeModal = () => {
    setAddClicked(false);
  };

  const addCategoryHandler = () => {
    ProductCtx.addCategory(catName);
    setCatName("");
    closeModal();
  };

  const inputChangeHandler = ({ target: { value } }) => {
    setCatName(value);
    if (catName.trim().length < 2) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };
  const addCategoryHandlerModal = () => {
    if (!inputError) {
      addCategoryHandler();
    } else {
      setInputError(true);
      setCatName("");
    }
  };



  return (
    <Container>
      <Title name="محصولات" />
      {!ProductCtx.items.length && <EmptyProductState />}

      {ProductCtx.items.map((el, i) => (
        <CategoryContainer {...el} key={i} />
      ))}

      <AddProduct add={AddModal} />

      <Drawer
        placement={"bottom"}
        onClose={closeModal}
        visible={addClicked}
        closable={false}
        height={240}
        width={150}
      >
        <ModalLayout>
          <div className="add_category_wrapper">
            <p className="_title" style={{
                 padding:"15px 25px",
                 textAlign: "right",
                 fontSize: "16px",
                 fontWeight: "900",
            }}>افزودن دسته بندی جدید</p>
            <div className="item__container">
              <div>
                <input
                  className={inputError ? "input__error" : ""}
                  type="text"
                  value={catName}
                  placeholder="نام دسته بندی"
                  onChange={inputChangeHandler}
                />
                {inputError && (
                  <p className="error_text">
                    نام دسته بندی باید حداقل دارای 3 حرف باشد
                  </p>
                )}
              </div>
              <div className="btn_wrapper">
                <button className="__add" onClick={addCategoryHandlerModal}>
                  افزودن دسته بندی
                </button>
                <button
                  className="__cancel"
                  onClick={() => setAddClicked(false)}
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </ModalLayout>
      </Drawer> 

    </Container>
  );
};
export default Product;
