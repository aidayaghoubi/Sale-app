import styledComponents from "styled-components";
import { useEffect , useState } from "react";

const WrapperStyled = styledComponents.div`

    width:100%;
    margin-left: 25px;
    height: 350px; 

        & ._title{
            color: #4d4d4d;
            font-size: 1.2rem;
            text-align: right;
           
        }
        & .dashboard_container{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: 3rem 0;
            border: 2px solid #d4d4ff;
            border-radius: 8px;
            position: relative;
            padding: 0.6rem 0.6rem 0;
            
            & .title_in{
                position: absolute;
                right: 27px;
                top: 30px;
                background-color: #d4d4ff;
                padding: 12px 10px;
                border-radius: 7px;
                font-size: 16px;
            }
            & label{
                position: absolute;
                top: 6px;
                left: 6px;
                font-size: 11.6px;
            }
            & .income{
                font-size: 32px;
                padding: 0;
                margin: 9px 15px;
                font-weight: bold;
            }
        }

    `;
// (acc , curr )=> acc + curr.selectedItems[0].totalPrice
const LastIncomeHandler = ({ factors }) => {

   

    const price = factors ?  factors?.map((el) => el.selectedItems) : [];
    const totalPrice = price.reduce((acc , curr) => acc + curr[0].totalPrice , 0)
 


  return (
    <WrapperStyled>
      <p className="_title">اخرین آمار دریافتی</p>
      <div className="item_wrapper">
        <div className="dashboard_container this_week">
          <p className="title_in">مجموع درآمد هفته جاری</p>
          <label>ریال</label>
          <p className="income">{totalPrice}</p>
        </div>
        <div className="dashboard_container last_month">
          <p className="title_in">مجموع درآمد ماه جاری</p>
          <label>ریال</label>
          <p className="income">{totalPrice}</p>
        </div>
        <div className="dashboard_container last_year">
          <p className="title_in">مجموع درآمد سال جاری</p>
          <label>ریال</label>
          <p className="income">{totalPrice }</p>
        </div>
      </div>
    </WrapperStyled>
  );
};
export default LastIncomeHandler;
