import styled from "styled-components";

const ItemWrap = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`


const ItemWraper = ({children}) => {


    return <ItemWrap>
        {children}
    </ItemWrap>
}
export default ItemWraper