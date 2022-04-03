import styled from "styled-components"

const MainContainer = styled.div`
width: 100%;
max-width: 1100px;
margin: 0 auto;
text-align: right;
`

const Container = (props) => {


return <MainContainer>
    {props.children}
</MainContainer>

}

export default Container