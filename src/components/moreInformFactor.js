import Container from "./Container";
import styled from "styled-components";

const ElemanWraper = styled.div`

& p{
    
    font-size: 24px;

}

& textarea{
    text-align: right;
    width: 100%;
    min-height: 8rem;
    outline: none;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    border-color: silver;
    border-image: initial;
    padding: 0.5rem;
    transition: all 0.3s ease 0s;
}
`
const MoreINformationInFactor = ({extera}) => {
    

    const onChangeText = ({target :{value}}) => {
        extera(value)
    }

    return (
        <ElemanWraper style={{width:'45%'}}>
            <p>توضیحات اضافه</p>
            <textarea onChange={(e) => onChangeText(e)}/>
        </ElemanWraper>
    )
}

export default MoreINformationInFactor