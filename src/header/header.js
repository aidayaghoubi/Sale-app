import { useState } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";



const Header1 = styledComponents.header`

position: fixed;
z-index: 2;
top: 0;
border-radius: 0px 15px 15px 0;
width: 8%;
background: #fff;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
left: 0;
transition: all 0.5s ease-in-out;
height: 100vh;
overflow: hidden;

  & .menu-btn__burger{
    transition: all 0.5s ease-in-out;
    position: absolute;
    right: 0;
    top:0.5rem;
    width: 28px;
    height: 3px;
    background: #000;
  }
  
  & .menu-nav__link{
    display: inline-block;
    font-size: 25px;
    text-transform: uppercase;
    padding: 2rem 0;
    color: #fff;
    transition: all 0.5s ease-in-out;
    font-weight: 300;
    text-decoration: none;
  }
 & .menu-nav{
    padding: 0;
    border-radius: 11px;
    background: #726DA8;
    list-style:none; 
    
    &.open{
        transform: translateY(0);
        transition: all 0.5s ease-in-out;
    }
    &__item{
        transition: all 0.5s ease-in-out;
        
        &.open{
            transform: translateX(0);
        }
        &.active > a {
            color: $secondry-color;
        }
    }
        &__link {
            display: inline-block;
            font-size:28px;
            text-transform: uppercase;
            padding: 2rem 0;
            transition: all 0.5s ease-in-out;
            font-weight: 300;
            &:hover{
                color: #df8116;
            }
        }
    }
    .nav-open{
        transform: translateX(0%) !important;
        transition: all 0.5s ease-in-out;
    }
    .nav{
        transform: translateX(-300%);
        transition: all 0.5s ease-in-out;
    }

    & .menu-btn{
        position: absolute;
        z-index: 1;
        right: 34%;
        top: 6%;
        height: 20px;
        width: 20px;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        & .menu-btn__burger{
            position: absolute;
            right: 0;
            top:0.5rem;
            width: 28px;
            height: 3px;
            transition: all 0.5s ease-in-out;
            background: #726DA8;

            &::before{
                content: '';
                position: absolute;
                top: -8px;
                width: 28px;
                transition: all 0.5s ease-in-out;
                left: 0;
                height: 3px;
                background-color: #726DA8;
               
            }
            &::after{
                content: '';
                position: absolute;
                top: 8px;
                transition: all 0.5s ease-in-out;
                left: 0;
                width: 18px;
                height: 3px;
                background-color:#726DA8;
               
            }
            &.open{
                transform: rotate(720deg);
                transition: all 0.5s ease-in-out;
                background: transparent;
        
                &::before{
                    transform: rotate(45deg) translate(5px, 8px );
                    transition: all 0.5s ease-in-out;
                }
                &::after{
                    width: 28px;
                    transform: rotate(-45deg) translate(3px , -7px);
                    transition: all 0.5s ease-in-out;
                }
            }
        }
    }

    
`

const Header = () => {

    const [menuShow, setmenuShow] = useState(false)

    const onShowMenuHandler = () => {
        setmenuShow(!menuShow)
    }

    const onLInkHandler = () => {
        setmenuShow(!menuShow)
    }

    return <Header1>
        <div className="menu-btn" onClick={onShowMenuHandler}>
            <span className={menuShow ? "menu-btn__burger open" : "menu-btn__burger"}></span>
        </div>
        <nav className={menuShow ? 'nav nav-open' : 'nav'}>
            <ul className="menu-nav">
                <li className="menu-nav__item">
                    <Link to="/home"
                        onClick={onLInkHandler}
                        className="menu-nav__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64">
                            <g id="Group_1" data-name="Group 1" transform="translate(-0.094 0.479)">
                                <rect id="Rectangle_1" data-name="Rectangle 1" width="63" height="64" transform="translate(0.094 -0.479)" fill="none" />
                                <path id="home" d="M24.5,9.607,16.46,1.57a5.306,5.306,0,0,0-7.492,0L.931,9.607A3.155,3.155,0,0,0,0,11.854v10.4a3.178,3.178,0,0,0,3.178,3.178h19.07a3.178,3.178,0,0,0,3.178-3.178v-10.4A3.155,3.155,0,0,0,24.5,9.607Zm-8.6,13.707H9.535V19.146a3.178,3.178,0,1,1,6.357,0Zm7.416-1.059a1.059,1.059,0,0,1-1.059,1.059H18.011V19.146a5.3,5.3,0,1,0-10.595,0v4.168H3.178a1.059,1.059,0,0,1-1.059-1.059v-10.4a1.068,1.068,0,0,1,.31-.749l8.036-8.034a3.187,3.187,0,0,1,4.5,0L23,11.108a1.068,1.068,0,0,1,.31.746Z" transform="translate(19.077 19.063)" fill="#e7e6f5" />
                            </g>
                        </svg>

                    </Link>
                </li>
                <li className="menu-nav__item">
                    <Link to="/product"
                        onClick={onLInkHandler}
                        className="menu-nav__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                            <g id="Group_7" data-name="Group 7" transform="translate(0 0.153)">
                                <g id="Group_6" data-name="Group 6" transform="translate(0 0)">
                                    <rect id="Rectangle_1" data-name="Rectangle 1" width="64" height="64" transform="translate(0 -0.153)" fill="none" />
                                    <path id="shop" d="M25.717,10.567a1.03,1.03,0,0,0-.026-.229L24.3,4.137A5.307,5.307,0,0,0,19.065,0H6.652A5.307,5.307,0,0,0,1.423,4.137l-1.4,6.2A1.03,1.03,0,0,0,0,10.567v1.057a4.176,4.176,0,0,0,1.072,2.793v5.661A5.327,5.327,0,0,0,6.429,25.36H19.287a5.327,5.327,0,0,0,5.358-5.283V14.416a4.176,4.176,0,0,0,1.072-2.793Zm-23.573.115L3.515,4.6A3.186,3.186,0,0,1,6.652,2.113H7.5v3.17a1.072,1.072,0,0,0,2.143,0V2.113h6.429v3.17a1.072,1.072,0,0,0,2.143,0V2.113h.849A3.186,3.186,0,0,1,22.2,4.6l1.372,6.086v.942a2.128,2.128,0,0,1-2.143,2.113H20.359a2.128,2.128,0,0,1-2.143-2.113,1.072,1.072,0,0,0-2.143,0,2.128,2.128,0,0,1-2.143,2.113H11.787a2.128,2.128,0,0,1-2.143-2.113,1.072,1.072,0,0,0-2.143,0,2.128,2.128,0,0,1-2.143,2.113H4.286a2.128,2.128,0,0,1-2.143-2.113ZM19.287,23.247H6.429a3.193,3.193,0,0,1-3.215-3.17V15.716a4.319,4.319,0,0,0,1.072.134H5.358a4.3,4.3,0,0,0,3.215-1.434,4.3,4.3,0,0,0,3.215,1.434H13.93a4.3,4.3,0,0,0,3.215-1.434,4.3,4.3,0,0,0,3.215,1.434H21.43a4.319,4.319,0,0,0,1.072-.134v4.361A3.193,3.193,0,0,1,19.287,23.247Z" transform="translate(18.932 19.11)" fill="#e7e6f5" />
                                </g>
                            </g>
                        </svg>

                    </Link>
                </li>
                <li className="menu-nav__item">
                    <Link to="/new-factor"
                        onClick={onLInkHandler}
                        className="menu-nav__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64">
                            <g id="Group_5" data-name="Group 5" transform="translate(-0.34)">
                                <g id="shopping-cart" transform="translate(20.511 20.27)">
                                    <path id="Path_4" data-name="Path 4" d="M21.886,3.929a2.884,2.884,0,0,0-2.219-1.038H4.088l-.04-.338A2.891,2.891,0,0,0,1.178,0H.964a.964.964,0,0,0,0,1.927h.214a.964.964,0,0,1,.957.851L3.46,14.052a4.818,4.818,0,0,0,4.785,4.256H18.308a.964.964,0,1,0,0-1.927H8.245a2.891,2.891,0,0,1-2.717-1.927H17.014a4.818,4.818,0,0,0,4.742-3.964l.756-4.2a2.885,2.885,0,0,0-.626-2.367ZM20.621,5.953l-.757,4.2a2.891,2.891,0,0,1-2.849,2.378H5.222L4.315,4.818H19.667a.964.964,0,0,1,.954,1.135Z" fill="#e7e6f5" />
                                    <circle id="Ellipse_4" data-name="Ellipse 4" cx="1.746" cy="1.746" r="1.746" transform="translate(4.887 19.55)" fill="#e7e6f5" />
                                    <circle id="Ellipse_5" data-name="Ellipse 5" cx="1.746" cy="1.746" r="1.746" transform="translate(14.662 19.55)" fill="#e7e6f5" />
                                </g>
                                <g id="Group_4" data-name="Group 4">
                                    <g id="Group_2" data-name="Group 2">
                                        <rect id="Rectangle_1" data-name="Rectangle 1" width="63" height="64" transform="translate(0.34)" fill="none" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </li>
                <li className="menu-nav__item">
                    <Link to="/setting"
                        onClick={onLInkHandler}
                        className="menu-nav__link">
                        <svg id="Group_3" data-name="Group 3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                            <g id="settings" transform="translate(19.851 18.52)">
                                <path id="Path_2" data-name="Path 2" d="M12.423,8a4.423,4.423,0,1,0,4.423,4.423A4.423,4.423,0,0,0,12.423,8Zm0,6.635a2.212,2.212,0,1,1,2.212-2.212A2.212,2.212,0,0,1,12.423,14.635Z" transform="translate(-0.484 0.846)" fill="#e7e6f5" />
                                <path id="Path_3" data-name="Path 3" d="M23.42,15.371l-.491-.283a10.063,10.063,0,0,0,0-3.638l.491-.283A3.319,3.319,0,1,0,20.1,5.416L19.61,5.7a9.927,9.927,0,0,0-3.15-1.816V3.317a3.317,3.317,0,1,0-6.635,0v.567A9.927,9.927,0,0,0,6.676,5.7l-.494-.286a3.319,3.319,0,1,0-3.317,5.75l.491.283a10.063,10.063,0,0,0,0,3.638l-.491.283a3.319,3.319,0,0,0,3.317,5.75l.492-.284a9.927,9.927,0,0,0,3.152,1.816v.567a3.317,3.317,0,1,0,6.635,0v-.567a9.927,9.927,0,0,0,3.149-1.82l.494.285a3.319,3.319,0,1,0,3.317-5.75ZM20.6,11.2a7.794,7.794,0,0,1,0,4.147,1.106,1.106,0,0,0,.513,1.253l1.2.692A1.106,1.106,0,1,1,21.208,19.2l-1.2-.694a1.106,1.106,0,0,0-1.344.182,7.723,7.723,0,0,1-3.586,2.073,1.106,1.106,0,0,0-.83,1.072v1.386a1.106,1.106,0,0,1-2.212,0V21.838a1.106,1.106,0,0,0-.83-1.072A7.723,7.723,0,0,1,7.62,18.688a1.106,1.106,0,0,0-1.344-.182l-1.2.693a1.106,1.106,0,1,1-1.106-1.915l1.2-.692a1.106,1.106,0,0,0,.513-1.253,7.794,7.794,0,0,1,0-4.147A1.106,1.106,0,0,0,5.17,9.943l-1.2-.692A1.106,1.106,0,1,1,5.077,7.335l1.2.694A1.106,1.106,0,0,0,7.62,7.851a7.723,7.723,0,0,1,3.586-2.073,1.106,1.106,0,0,0,.83-1.076V3.317a1.106,1.106,0,1,1,2.212,0V4.7a1.106,1.106,0,0,0,.83,1.072,7.723,7.723,0,0,1,3.586,2.078,1.106,1.106,0,0,0,1.344.182l1.2-.693a1.106,1.106,0,1,1,1.106,1.915l-1.2.692A1.106,1.106,0,0,0,20.6,11.2Z" transform="translate(-1.203)" fill="#e7e6f5" />
                            </g>
                            <g id="Group_2" data-name="Group 2">
                                <rect id="Rectangle_1" data-name="Rectangle 1" width="64" height="64" fill="none" />
                            </g>
                        </svg>

                    </Link>
                </li>
            </ul>
        </nav>
    </Header1>
}

export default Header;