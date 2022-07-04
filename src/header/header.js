import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";



const Header1 = styledComponents.header`

position: fixed;
z-index: 2;
top: 0;
border-radius: 0px 15px 15px 0;
width: 8%;
background: trasparent;
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
    padding: 1rem 0;
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
            padding: 1rem 0;
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
        transition: .3s cubic-bezier(.4,0,.2,1);
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
                transform: rotate(180deg);
                transition: all 0.5s ease-in-out;
                background: transparent;
        
                &::before{
                    transform: rotate(45deg) translate(5px, 8px );
                    transition: all 0.5s ease-in-out;
                    height: 3px;
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



    const [menuShow, setmenuShow] = useState(false);

    const onShowMenuHandler = () => {
        setmenuShow(!menuShow);

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
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44 27C44 25.143 43.263 23.363 41.95 22.05C40.637 20.737 38.857 20 37 20H27C25.143 20 23.363 20.737 22.05 22.05C20.737 23.363 20 25.143 20 27V37C20 38.857 20.737 40.637 22.05 41.95C23.363 43.263 25.143 44 27 44H37C38.857 44 40.637 43.263 41.95 41.95C43.263 40.637 44 38.857 44 37V27ZM42 27V37C42 38.326 41.473 39.598 40.536 40.536C39.598 41.473 38.326 42 37 42H27C25.674 42 24.402 41.473 23.464 40.536C22.527 39.598 22 38.326 22 37V27C22 25.674 22.527 24.402 23.464 23.464C24.402 22.527 25.674 22 27 22H37C38.326 22 39.598 22.527 40.536 23.464C41.473 24.402 42 25.674 42 27ZM26.006 34.994H25C24.448 34.994 24 35.442 24 35.994C24 36.546 24.448 36.994 25 36.994H26.006V38C26.006 38.552 26.454 39 27.006 39C27.558 39 28.006 38.552 28.006 38V36.994H29.012C29.564 36.994 30.012 36.546 30.012 35.994C30.012 35.442 29.564 34.994 29.012 34.994H28.006V33.988C28.006 33.436 27.558 32.988 27.006 32.988C26.454 32.988 26.006 33.436 26.006 33.988V34.994ZM34.988 38.988H39C39.552 38.988 40 38.54 40 37.988C40 37.436 39.552 36.988 39 36.988H34.988C34.436 36.988 33.988 37.436 33.988 37.988C33.988 38.54 34.436 38.988 34.988 38.988ZM34.988 34.988H39C39.552 34.988 40 34.54 40 33.988C40 33.436 39.552 32.988 39 32.988H34.988C34.436 32.988 33.988 33.436 33.988 33.988C33.988 34.54 34.436 34.988 34.988 34.988ZM36.994 26.586L35.695 25.287C35.305 24.897 34.671 24.897 34.281 25.287C33.891 25.677 33.891 26.311 34.281 26.701L35.58 28L34.281 29.299C33.891 29.689 33.891 30.323 34.281 30.713C34.671 31.103 35.305 31.103 35.695 30.713L36.994 29.414L38.293 30.713C38.683 31.103 39.317 31.103 39.707 30.713C40.097 30.323 40.097 29.689 39.707 29.299L38.408 28L39.707 26.701C40.097 26.311 40.097 25.677 39.707 25.287C39.317 24.897 38.683 24.897 38.293 25.287L36.994 26.586ZM25 28.994H29.012C29.564 28.994 30.012 28.546 30.012 27.994C30.012 27.442 29.564 26.994 29.012 26.994H25C24.448 26.994 24 27.442 24 27.994C24 28.546 24.448 28.994 25 28.994Z" fill="#E7E6F5" />
                        </svg>

                    </Link>
                </li>
            </ul>
        </nav>
    </Header1>
}

export default Header;