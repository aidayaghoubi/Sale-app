import styledComponents from "styled-components";
import { useState } from "react";
import AddItemToCategoryModal from "./addItemToCategory";
import Container from "../Container";

const StyledDIV = styledComponents.div`

    display: flex;
    align-items: center;
  
    justify-content: space-between;
    direction: rtl;

        & p{
            font-size: 24px;
            font-weight: bold;
            padding: 12px 37px;
        }
        & .btn_wraper{

            & button{
                
                cursor: pointer;
                border: 1px solid #9292ff;
                padding: 9px 16px;
                background-color: transparent;
                font-size: 15px;
                font-weight: 500;
                border-radius: 4px;
                color: #342f2f;

            }
        }

}
`

const CateoryContaner = ({ product , categoryName , id }) => {

    const [modalShow, setmodalShow] = useState(false)

    return (
        <Container>
            <StyledDIV>
                <div>
                    <p>{categoryName}</p>
                </div>
                <div className="btn_wraper">
                    <button onClick={setmodalShow}>
                        محصول جدید
                    </button>
                </div>
            
                {modalShow && <AddItemToCategoryModal 
                                    categoryId={id}
                                    closeHandler={() => setmodalShow(false)}
                                />}

            </StyledDIV>
            {/* {items.map(el => {
                return <p>{el}</p>
            })} */}
        </Container>
    )
}
export default CateoryContaner;