import styledComponents from "styled-components";
import SearchModal from "./SearchModal";
import { useState } from "react";


const SearchDivStyled = styledComponents.div`
width: 91%;
direction: ltr;
margin: 0 auto;
display: flex;
align-items: flex-end;
justify-content: flex-end;
margin-top: 19px;
flex-direction: column;

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

`


const ProductSearch = ({addItem}) => {
    const [showSearch, setshowSearch] = useState(false);
    const [serached ,setserached ] = useState('');
    

    const onInputChangeHandler = ({target :{value}}) => {
        setshowSearch(true);
        setserached(value)
    }
    const onInputBlurHandler = () => {
       
          setshowSearch(true)
     
    }
    const onInputFocusHandler = () => {
        setshowSearch(true)
    }
    const addItemToFac =(prop) =>{
        addItem(prop)
        setshowSearch(false);
        
    }

    return (
        <SearchDivStyled>
            <input
                type="text"
                placeholder="نام محصول را وارد کنید"
                onChange={onInputChangeHandler}
                onBlur={onInputBlurHandler} 
                onFocus={onInputFocusHandler}/>
            {showSearch && <SearchModal searchedItem={serached} addingItem={addItemToFac}/>}
        </SearchDivStyled>

    )
}

export default ProductSearch