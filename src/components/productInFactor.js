import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductStyled = styled.div`
width: 100%;


    & .item_container{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & .cover{
            background-color: #ffffff;
            z-index: 999999999;
            width: 75%;
            height: 53px;
            opacity: 0.5;
            background-color: #ffffff;
            z-index: 999999999;
            position: absolute;
            width: 82%;
            height: 53px;
            
            opacity: 0.5;
    
        }
        & .disable{
            opacity: 0;
            background-color: #ffffff;
            z-index: 999999999;
            width: 82%;
            height: 53px;
            background-color: #ffffff;
            z-index: 999999999;
            position: absolute;
            display: none;
            width: 75%;
            height: 53px;
            
        }
        

        & .item-Wraper{
            width: 12%;
        }
         
        & .product_control{

            & .remove_btn{
                border: none;
                background-color: none;
                font-size: 18px;
                background-color: transparent;
                color: #e72b2b;
                margin: 0 5px;
                cursor: pointer;
            }
            & .more_btn{
                background-color: transparent;
                border: none;
                font-size: 25px;
                width: -13px;
                transform: rotate(91deg);
                cursor: pointer;
            }
        }
            & .name_wraper{
                display:flex;
                align-items: center;
                width:8%
                font-size: 1.5rem;
                justify-content: center;
                position: relative;

                &::after{
                    content: "";
                    display: block;
                    width: 75%;
                    height: 29%;
                    background-color: rgb(212 212 255);
                    position: absolute;
                    top: 26%;
                    z-index: -1;
                    left: 8%;
                    border-radius: -4px;
                    padding: 0.6rem;
                    -webkit-transition: all 0.3s ease 0s;
                    transition: all 0.3s ease 0s;
                
                  }
                & p{
                    font-size:2rem;
                     margin-left: 11px;
                }
                & span{
                   
                    color: #6a5a5a;
                    font-size: 1.5rem;
                  
                  
                }
              
            }
            
            & .price{
                width: 16%;
            }
            & .type input{
                text-align: right;
                outline: none;
                border-radius: 5px;
                border-width: 2px;
                border-style: solid;
                border-color: silver;
                font-size: 1.1rem;
                border-image: initial;
                padding: 0.5rem;
                transition: all 0.3s ease 0s;
            }
            & .amount input{
                text-align: right;
                outline: none;
                border-radius: 5px;
                border-width: 2px;
                border-style: solid;
                font-size: 1.1rem;
                border-color: silver;
                border-image: initial;
                text-align:center;
                padding: 0.5rem;
                transition: all 0.3s ease 0s;
            }
            & .price{
                text-align: center;
                font-size: 1.2rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                
                & span{
                    font-size: 0.9rem;
                    color: silver;
                    margin-left: 6px;
                
                }
            }
        }
         & .change_product_show{
            display: flex;
            align-items: center;
            justify-content: space-between;
            direction: rtl;
            width: 94%;
            margin: 30px 0;
            position: relative;

            & .close_price_change{
                position: absolute;
                top: -28px;
                right: -49px;
                border: none;
                background-color: transparent;
                font-size: 15px;
                font-weight: bold;
                color: #6f6fb3;
                cursor: pointer;
            }
            & .save_product_price_change{
                margin: 0 65px;
                background-color: #6f6fb3;
                border: none;
                font-size: 17px;
                color: white;
                padding: 5px 16px;
                cursor: pointer;
                border-radius: 4px;
            }
            & input{
                border-top-width: initial;
                border-right-width: initial;
                border-left-width: initial;
                border-top-color: initial;
                border-right-color: initial;
                border-left-color: initial;
                width: 5rem;
                outline: none;
                border-style: none none solid;
                border-image: initial;
                border-bottom: 1px solid silver;
                padding: 0px 0.5rem;
                margin: 0px 0.5rem;
                text-align: center;
                font-size: 21px;
            }
            & span{
                font-size:16px;
            }
         }
         & .hide{
            display: none;
            
         }
`;

const ProductInFactor = ({ data, changePnum, setProductType, deletProduct, changePprice, num }) => {

    const [amout, setAmount] = useState(1);
    const [price, setPrice] = useState(data.price);
    const [coverShow, setCoverShow] = useState(false);


    const onRemoveItem = () => {
        deletProduct({ data, num })
    }
    const AmountInputHandler = ({ target: { value } }) => {
        if (value >= 1) {
            setAmount(parseInt(value));
        }
    }

    const typeInputHandler = ({ target: { value } }) => {
        
        setProductType({ num, value })
    }
    const onOpenPriceChangeHandler = () => {
        setCoverShow(true)
    }
    const onCloseProductProceHandler =() =>{
        setCoverShow(false);
        setPrice('');
    }
    const onChangeInputPriceHandler = ({ target: { value } }) =>{
        setPrice(value)
    }
    const onSavePriceChangeHandler =() => {
        if(price && price !== data.price){
            changePprice({num ,price })
            setCoverShow(false)
            setPrice('')
        }
    }
    useEffect(() => {
        changePnum({ num, amout })
    }, [amout]);

    return (
        <ProductStyled>
            <div className="item_container">
                <div className={coverShow ? 'cover' : 'disable'}> </div>
                <div className="item-Wraper name_wraper">
                    <span>{num + 1}</span>
                    <p>{data.name}</p>
                </div>
                <div className="input_wraper type">
                    <input
                        type='text'
                        placeholder={`گونه :${data.type}`}
                        onChange={typeInputHandler}
                    />
                </div>
                <div className="input_wraper amount">
                    <input
                        type='number'
                        value={amout}
                        onChange={AmountInputHandler}
                    />
                </div>
                <div className="item-Wraper price">
                    <p> {data.totalPrice} </p>
                    <span>ریال</span>
                </div>
                <div className="item-Wraper product_control">
                    <button className="remove_btn" onClick={onRemoveItem}>حذف</button>
                    <button className="more_btn" onClick={onOpenPriceChangeHandler}>...</button>
                </div>

            </div>
            <div className={coverShow ? 'change_product_show' : 'hide'}>
                <button className="close_price_change" onClick={onCloseProductProceHandler}>بستن</button>
                <div>
                <span> قیمت این محصول </span>
                <input 
                    onChange={onChangeInputPriceHandler}
                    className="price_input_change"
                    type='text'
                    value={price}
                    placeholder={data.price} />
                <span style={{ color: 'silver' , marginLeft:'3px'}}> ریال </span>
                <span>میباشد .میتوانید آن را برای فاکتور جاری تغییر دهید</span>
                </div>
                <button 
                className="save_product_price_change"
                onClick={onSavePriceChangeHandler}
                >ذخیره</button>
            </div>
        </ProductStyled>
    )
}
export default ProductInFactor;