import styledComponents from "styled-components"

const MainContainer = styledComponents.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
text-align: right;
`

const Container = (props) => {


return <MainContainer>
    {props.children}
</MainContainer>

}

export default Container