import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const Navigation = styledComponents.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
    height: 45px;
    direction: rtl;

    & a{
        text-decoration: none;
        font-weight: bold;
        color: black;
    }
`

const Header = () => {

    return <Navigation>
        <Link to="/home">خانه</Link>
        <Link to="/product">محصولات</Link>
        <Link to="/new-factor">فاکتور جدید</Link>
        <Link to="/setting">تنظیمات</Link>
    </Navigation>
}

export default Header;