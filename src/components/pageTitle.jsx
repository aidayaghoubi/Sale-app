import styledComponents from "styled-components"

const TilteWrapper = styledComponents.div `

    & p{
        padding: 8px 27px;
        font-size: 43px;
        transform: translateY(16px);
    }
`


const Title = ({name}) => {


    return <TilteWrapper>
        <p>{name}</p>
    </TilteWrapper>
}
export default Title