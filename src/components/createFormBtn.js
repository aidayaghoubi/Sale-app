import styled from "styled-components"

const DivStyled = styled.div`

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
}

`

const CreateForm = ({cheackProduct , checkInputes , setProierity , moreINformation}) => {


    const onCreateFactorButton = () =>{
        
    }

    return (
        <DivStyled>
            <button disabled={false} onClick={onCreateFactorButton}>ایجاد فاکتور</button>
        </DivStyled>
    )
}

export default CreateForm