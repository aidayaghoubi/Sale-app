import Title from "../components/pageTitle";
import Container from "../components/Container";
import FactorInputes from "../components/factorInput";
import { useState, useContext } from "react";
import ProductSearch from "../components/productSearch";
import ProductInFactor from "../components/productInFactor";
import ProiorityFaactor from "../components/priorityFactor";
import MoreINformationInFactor from "../components/moreInformFactor";
import ItemWrraper from "../components/ui/itemInFactorWrap";
import styled from "styled-components";
import { FactorContext } from "../context/factorContext";
import FactorContextProvider from "../context/factorContext";
import { useNavigate } from "react-router-dom";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import styledComponents from "styled-components";



const SubmitButton = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin: 0 77px;

& button{
    border-radius: 5px;
    padding: 5px 34px;
    margin: 3rem 0px;
    border: none;
    background: rgb(238,187,77);
    padding: 15px 37px;
    font-size: 16px;
    cursor:pointer;

`;

const CalenderWraper = styledComponents.div`

    width: 34%;
    display: flex;
    align-items: center;
    justify-content: flex-end;



`
const NewFactor = () => {

    const d = new Date().toLocaleDateString('fa-IR').split("/");
    
    const defaultValue = [{
        year: d.slice(0,4),
        month: d.slice(5,6),
        day: d.slice(7,8),
    }];
  
   console.log(d , defaultValue)

    const [selectedItems, setSelectedItems] = useState([]);
    const [priority, setProierity] = useState(1);
    const [customerDate, setCustomerDate] = useState({})
    const [moreInfo, setMoreInfo] = useState('');
    const FactorCtx = useContext(FactorContext);
    const [selectedDay, setSelectedDay] = useState();

    let navigate = useNavigate()

    const disable = (customerDate.length === 0 || selectedItems.length === 0) ? true : false;


    function productThatSold(item) {
        setSelectedItems(prev => [...prev, { ...item, amount: 1, totalPrice: parseInt(item.price) }]);

    }
    function changeProductPrice({ num, price }) {

        setSelectedItems(prev => prev.map((el, i) => i === num ? { ...el, price: price, totalPrice: price * el.amount } : el))
    }
    function changeProductNumber({ num, amout }) {

        setSelectedItems(prev => prev.map((el, i) => i === num ? { ...el, amount: amout, totalPrice: el.price * amout } : el))

    }
    function setProductType({ num, value }) {

        setSelectedItems(prev => prev.map((el, i) => i === num ? { ...el, type: value } : el))
    }
    const deletProductFromFactor = ({ data, num }) => {
        setSelectedItems(prev => prev.filter((el, i) => i !== num))
    }
    const onSubmitFactorHandler = () => {

        /* props.history.push('/dedde') */
        const shenase = Date.now();

        FactorCtx.addFactor({
            priority: priority,
            selectedItems,
            customerDate,
            moreInfo,
            shenase,
            selectedDay
        });
        setSelectedItems([]);
        setCustomerDate({});
        setMoreInfo('');
        navigate(`/new-factor/${shenase}`)
    }

    return <Container>
        <FactorContextProvider>
            <Title name="فاکتور" />
            <FactorInputes inputValue={setCustomerDate}
            />
            <ProductSearch
                addItem={productThatSold} />
            <CalenderWraper>
                <Calendar
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                    locale="fa"
                    colorPrimary="#5e5ec3"
                    colorPrimaryLight="#eaeaff"
                />
            </CalenderWraper>

            {selectedItems.map((el, i) => <ProductInFactor
                key={i}
                data={el}
                num={i}
                changePnum={changeProductNumber}
                setProductType={setProductType}
                deletProduct={deletProductFromFactor}
                changePprice={changeProductPrice}
            />)}
            <ItemWrraper>
                <MoreINformationInFactor extera={setMoreInfo} />
                <ProiorityFaactor proierity={setProierity} />
            </ItemWrraper>
            <SubmitButton>

                <button
                    onClick={onSubmitFactorHandler}
                    disabled={disable}
                >ایجاد فرم
                </button>

            </SubmitButton>
        </FactorContextProvider>
    </Container >
}
export default NewFactor
