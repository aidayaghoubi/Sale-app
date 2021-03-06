import styledComponents from "styled-components";
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
            padding: 15px 16px;
            border-right: 5px solid;
            border-color: #5d5ddb;
            margin: 5px 0px;
            align-items: center;

            & button{
                border: 2px solid #5d5ddb;
                color: #5d5ddb;
                cursor: pointer;
                border-radius: 5px;
                background-color: #fff;
                height: 37px;
                font-size: 16px;
                font-weight: bold;
                width:86px;
                position: relative;
                -webkit-transition: 0.8s;
                overflow: hidden;

                 & span{
                    z-index: 999;
                    position: absolute;
                    left: 16%;
                    -webkit-transition: 0.8s;
                    top: 4px;
                    
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
`;

const LastFActor = ({ factors }) => {
  let navigate = useNavigate();

  const onShowFactor = (props) => {
    navigate(`/new-factor/${props}`);
  };

  const itemColor = (item) => {
    let color = "";

    switch (item) {
      case 1:
      return  color = "#b1f3b1";
      case 2:
        return  color = "#d9edf3";
      case 3:
        return   color = "#ffffcc";

      case 4:
        return   color = "#ffedcc";

      case 5:
        return   color = "#ffcccc";

      default:
        color = "#ffcccc";
    }

    return color;
  };

  const items = factors.map((el, i) => (
    <div
      className="factor"
      key={i}
      style={{
        borderColor: itemColor(el.priority),
        backgroundColor:itemColor(el.priority)
      }}
    >
      <p>{el?.customerDate?.name?.value}</p>
      <p>?????????? ???????????? : {el.shenase}</p>
      <p> ???????????? : {el.priority}</p>

      <button onClick={() => onShowFactor(el.shenase)}>
        <span>????????????</span>
      </button>
    </div>
  ));

  return (
    <WrapperStyled>
      <p className="_title">?????????? ????????????</p>
      <div className="factor_container">{items}</div>
    </WrapperStyled>
  );
};
export default LastFActor;
