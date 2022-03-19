import Container from "./Container";
import styled from "styled-components";

const ElemanWraper = styled.div`

& .eleman_wraper{

}
`
const MoreINformationInFactor = () => {


    return (
        <ElemanWraper style={{width:'45%'}}>
            <p>توضیحات اضافه</p>
            <textarea />
        </ElemanWraper>
    )
}

export default MoreINformationInFactor