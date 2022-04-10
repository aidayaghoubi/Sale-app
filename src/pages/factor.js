import { useParams } from "react-router-dom";
import { FactorContext } from "../context/factorContext";
import { useContext, useState } from "react";
import styledComponents from "styled-components";
import Container from "../components/Container";

const FactorWraper = styledComponents.div`

        width: 100%;
        & .print-btn{
            padding: 12px 30px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 10px;
            & button{
                padding: 12px 30px;
                background-color: #fff;
                border: 1px solid #673ab7;
                color: #673ab7;
                cursor: pointer;
                border-radius: 8px;
                font-size: 18px;
                transition:all 0.5s;
                &:hover{
                 
                  background-color: #673ab7;
                  border: 1px solid #fff;
                  color: #fff;
                }
            }
        }

      & .main-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: gray;
        & p{
            font-size: 22px;
          
                & span{
                    color: black;
                    font-size: 28px;
                }
        }
    }
    & .user-numbers-part{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin: 0 auto;
            & .phone-number{
                margin-right: 29%;
            }
            & p{
                font-size: 22px;
                color: gray;
                    & span{
                        color: black; 
                        font-size: 28px;
                    }
            }
    }

    & .user-address-part{
        font-size: 22px;
        color: gray;
        & p{
            & span{
                color: black;
                font-size: 28px;
            }
        }
    }

    & .product-list-table{
        text-align: right;
        margin-top: 3rem;
        width: 100%;
        margin-bottom: 1rem;
        color: #212529;
        border-collapse: collapse;
        border-spacing: 2px;
        border-color: grey;
        & thead{
            & tr{
                & th{
                    text-align: center;
                    border: none;
                    border-bottom: 2px solid #eebb4d;
                    vertical-align: bottom;
                    padding: 0.75rem;
                    font-size: 17px;
                    color: #413d3d;

                    & span{
                        font-size: 12px;
                        margin-right: 6px;
                        color: #a09999;
                    }
                }
            }
        }
        & tbody{
            & tr{
                margin-top: 15px;
                & th{
                    text-align: center;
                    border: none;
                    vertical-align: bottom;
                    font-size: 19px;
                    padding: 0.75rem;
                }
            }
        }
    }
    
    & .price{
      display:flex;
      display: -ms-flexbox;
      align-items: center;
      justify-content: flex-end;

      & p{
        margin-right: ;
        margin-right: 14px;
        font-weight: bold;
        font-size: 19px;
        color: black;
    
      }
      & span{
        color:gray;
      }
    }

    & .date{

      & p{
        color:gray;
      }
      & span{
        color:black;
        font-weight:bold;
        margin: 0 4px;
      }
    }

`;

const FactorPrint = (props) => {
  const factorCtx = useContext(FactorContext);
  const params = useParams();
  const item = factorCtx.factors.filter((el) => el.shenase == params.id);

  const onPrintBtnClicked = () => {
    window.print();
  };

  const totalPrice = item[0]?.selectedItems?.reduce(
    (acc, curr) => curr.totalPrice + acc,
    0
  );

  const products = item["0"].selectedItems.map((el, i) => (
    <tr key={i}>
      <th>{el.name}</th>
      <th>{el.amount}</th>
      <th>{el.price}</th>
      <th>{el.type}</th>
      <th>{el.totalPrice}</th>
    </tr>
  ));

  return (
    <Container>
      <FactorWraper>
        <div className="main-header">
          <p>
            شناسه:
            <span> {item["0"].shenase} </span>
          </p>
          <p>
            <span>{item["0"].customerDate?.name?.value} </span>
            :نام شخص{" "}
          </p>
        </div>
        <div className="user-address-part">
          <p>
            <span>{item["0"].customerDate?.addres?.value} </span>
            :آدرس
          </p>
        </div>
        <div className="user-numbers-part">
          <p className="phone-number">
            <span>{item["0"].customerDate?.number?.value} </span>
            :شماره همراه
          </p>
          <p>
            <span>{item["0"].customerDate?.phoneNumber?.value} </span>
            :شماره تلفن
          </p>
        </div>
        <table className="product-list-table">
          <thead>
            <tr>
              <th>نام</th>
              <th>تعداد</th>
              <th>
                قیمت واحد
                <span>ریال</span>
              </th>
              <th>گونه</th>
              <th>
                قیمت کل
                <span>ریال</span>
              </th>
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
        <div className="price">
          <p>{totalPrice}</p>
          <span>ریال مجموع</span>
        </div>
        <div className="date">
          <p>
            تاریخ صدور فاکتور
            <span>{item["0"].selectedDay.day}</span>\
            <span>{item["0"].selectedDay.month}</span>\
            <span>{item["0"].selectedDay.year}</span>
          </p>
        </div>
        <div className="print-btn">
          <button onClick={onPrintBtnClicked} className="print">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>{" "}
            پرینت فاکتور
          </button>
        </div>
      </FactorWraper>
    </Container>
  );
};

export default FactorPrint;
