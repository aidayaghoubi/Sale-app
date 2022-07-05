import styledComponents from "styled-components";

const AddBtnWrapper = styledComponents.div`
display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;

    & .__line{
        height: 2px;
        background-color: #d4d4ff;
        width: 100%;
        margin: 15px 0;
    }
    & .wrapper_{
        width: 100%;
    }
    & button{
        cursor: pointer;
        border: 2px solid #9292ff;
        padding: 9px 16px;
        background-color: transparent;
        font-size: 18px;
        display: flex;
        align-items: center;
        color: #9292ff;
        border-radius: 10px;
        transition: all 0.2s;
        border: 0px solid #ffffff;
        color: #fff;
        background-color: #6d6de8;
        font-size: 17px;
        box-shadow: 1px 1px 16px -2px #2b2b9c;

        & svg path{
            transition: all 0.2s;
            stroke:#fff;
            margin-right: 4px;
        }
      &:hover{
          & svg path{
            stroke:#fff
          }
          box-shadow: none;
        color: #fff
      }
    }

`

const AddProduct = ({ add }) => {


    return <AddBtnWrapper>
        <div className="wrapper_">
            <div className="__line">

            </div>
            <button onClick={add}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width='26px' id="Layer_1" x="0" y="0"
                        version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                        <path fill="none" stroke="#5151d4" strokeLinecap="round"
                            strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"
                            d="M14.5 22V7M7 14.5h15" /></svg>
                </span>
                اضافه کردن دسته بندی
            </button>
        </div>
    </AddBtnWrapper >
}

export default AddProduct;