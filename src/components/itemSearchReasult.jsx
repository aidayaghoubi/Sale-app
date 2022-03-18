import styledComponents from "styled-components";

const SearchedItem = styledComponents.div`
    width: 92%;
    height: 51px;
    border:2px solid #ffdbc5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 5px;
    margin: 2px 0;

    & .itemm{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        &:hover{
            cursor:pointer;
        }
    }
    
    & p{
        color: black;
        margin: 0 15px;
        font-size: 21px;
    }
`

const SearchedItemREsult = ({ productName, onAddItem }) => {


    function ItemClickHandler() { 
      
        onAddItem(productName);

    }
    console.log('dede')
    return (<SearchedItem >
        <div className="itemm" onClick={ItemClickHandler}>
            <p>
                {productName.name}
            </p>
        </div>
    </SearchedItem>)
}
export default SearchedItemREsult;