import styledComponents from "styled-components";
import { useState } from "react";

const InputStyled = styledComponents.div`

backgroundColor: #fff;


    & .input_wrapper{
        display:flex;
        direction: rtl;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

        & .input_inner_wrapper{
             & input{
                width: 467px;
                padding: 15px 13px;
                margin: 15px 23px;
                direction: rtl;
                border-radius: 7px;
                border: none;
                border: 2px solid;
                border-color: #c3c3c3;
                font-size: 17px;
                color: #131313;
            
             }
        }
    }
`

const FORM_Inoutes = [
    {
        lable: 'نام و نام خانوادگی',
        key: 'name'
    },
    {
        lable: 'آدرس',
        key: 'addres'
    },
    {
        lable: 'شماره ثابت',
        key: 'phoneNumber'
    },
    {
        lable: 'شماره همراه',
        key: 'number'
    },
]




const FactorInputes = () => {

    const [inputValues, setinputValues] = useState({
        name: '',
        addres: '',
        phoneNumber: '',
        number: ''
    })

    const [inputEror, setinputEror] = useState({
        name: false,
        addres: false,
        phoneNumber: false,
        number: false
    })

    function onInputChangeHAndler(e, key) {
        setinputValues(prev => ({
            ...prev,
            [key]: e.target.value
        }))

    }
    function onInputBlueHAndler() {
        console.log(inputValues , 'lost blur')
    }
    
    return (
        <InputStyled>
            <div className="input_wrapper">
                {FORM_Inoutes.map((el, i) => <div key={i} className="input_inner_wrapper">
                    <input placeholder={el.lable} type="text" onBlur={(e) => onInputBlueHAndler(e, el.key)} onChange={(e) => onInputChangeHAndler(e, el.key)}></input>
                </div>)}
            </div>
        </InputStyled>
    )
}

export default FactorInputes