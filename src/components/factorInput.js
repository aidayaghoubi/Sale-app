import styledComponents from "styled-components";
import { useEffect, useState } from "react";

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
            
            position:relative;
            margin: 7px 0px;

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
             & p{
                padding: 0;
                margin: 0;
                position: absolute;
                right: 39px;
                top: 81px;
                color: #f71414;
             }
        }
    }
`

const FORM_INPUTES = [
    {
        lable: 'نام و نام خانوادگی',
        key: 'name',
        massage: 'لطفا نام درست وارد کنید'
    },
    {
        lable: 'آدرس',
        key: 'addres',
        massage: 'آدرس باید حداقل 10 حرف باشد'
    },
    {
        lable: 'شماره ثابت',
        key: 'phoneNumber',
        massage: 'شماره مورد نظر درست نمی باشد'
    },
    {
        lable: 'شماره همراه',
        key: 'number',
        massage: 'شماره همراه اشتباه می باشد'
    },
]


const FactorInputes = ({ inputValue }) => {

    const [input, setinput] = useState({})

    function onInputChangeHAndler({ target: { value } }, key) {
        inputValue(prev => ({
            ...prev,
            [key]: {
                value,
                haveError: (key === 'number') ? value.trim().length >= 11 ? false : true : value.trim().length > 3 ? false : true,
            }
        }))
    }


    // useEffect(() => {
    //     (input.addres?.haveError === false
    //         && input.name?.haveError === false
    //         && input.number?.haveError === false
    //         && input.phoneNumber?.haveError === false) && inputValue(input)

    // }, [input])

    const resetInputse = () =>{
        setinput('')
    }

    return (
        <InputStyled>
            <div className="input_wrapper">
                {FORM_INPUTES.map((el, i) =>
                    <div key={i} className="input_inner_wrapper">
                        <input
                            value={input?.[el.key]?.value}
                            placeholder={el.lable}
                            type={(el.key === 'number' || el.key === 'phoneNumber') ? 'number' : 'text'}
                            onChange={(e) => onInputChangeHAndler(e, el.key)} />
                        {
                            input[el.key]?.haveError && <p>{el.massage}</p>

                        }
                    </div>
                )}
            </div>
        </InputStyled>
    )
}

export default FactorInputes