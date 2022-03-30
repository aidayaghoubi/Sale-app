import styledComponents from "styled-components"
import { useNavigate } from "react-router-dom";

const WrapperStyled = styledComponents.div`

    width:100%;
    margin-right: 25px;
    height: 350px; 
    & ._title{
        color: #4d4d4d;
        font-size: 1.2rem;
        text-align: right;
    }
    & .factor_container{
        margin: 3rem 0;

        & .factor{
            display: flex;
            justify-content: space-between;
            direction: rtl;
            padding: 0px 16px;
            border-right: 5px solid;
            border-color: #5d5ddb;
            margin: 25px 0px;
            align-items: center;

            & button{
                border: 2px solid #5d5ddb;
                color: #5d5ddb;
                cursor: pointer;
                border-radius: 5px;
                background-color: transparent;
                height: 37px;
                font-size: 16px;
                font-weight: bold;
                width: 68px;
                position: relative;
                -webkit-transition: 0.8s;
                overflow: hidden;

                 & span{
                    z-index: 999;
                    position: absolute;
                    left: 18%;
                    -webkit-transition: 0.8s;
                    top: 7px;
                 }

                &::after{
                    content: '';
                    position: absolute;
                    width: 110%;
                    height: 193%;
                    left: 0;
                    top: -65px;
                    background-color: #5d5ddb;
                    -webkit-transition: 0.8s;
                    transition: 1s;
                    border-radius: 11px;
                }
                &:hover::after{
                    top: -8px;
                }
                &:hover span{
                    color: #fff
                }
            }
        }
    }
`

const LastFActor = ({ factors }) => {
    let navigate = useNavigate()

    const onShowFactor = (props) => {
        console.log(props);
        navigate(`/new-factor/${props}`)
    }

    const items = factors.map((el, i) =>
        <div className="factor" key={i}>
            <p>{el?.customerDate?.name?.value}</p>
            <p>شناسه فاکتور : {el.shenase}</p>
            <p> اولویت : {el.priority}</p>
            <button onClick={()=>onShowFactor(el.shenase)}><span>مشاهده</span></button>
        </div>
    )

    return (
        <WrapperStyled>
            <p className="_title">
                اخرین فاکتور
            </p>
            <div className="factor_container">
                {
                    items
                }
            </div>
        </WrapperStyled>
    )
}
export default LastFActor