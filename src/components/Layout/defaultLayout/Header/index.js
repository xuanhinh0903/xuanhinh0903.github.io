import header from './Header.module.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../../../../pages/Home';
function Header() {
    return (
        <div>
            <div className={header.header}>
                <div>
                    <Link to="/">
                        <img
                            className={header.header__logo}
                            src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/logo.png?1655256672925"
                        ></img>
                    </Link>
                </div>
                <div className={header.header__items}>
                    <div className={header.header__item}>Home</div>
                    <div className={header.header__item}>
                        <div>
                            <div className={`${header.header__itemChildrens}`}>
                                <div className={header.header__itemSpace}>Shop</div>
                            </div>
                            <div className={header.header__itemChildrenss}>
                                <div className={header.header__itemChildren}>ALL</div>
                                <div className={header.header__itemChildren}>TOPS</div>
                                <div className={header.header__itemChildren}>BOTTOM</div>
                                <div className={header.header__itemChildren}>ACCESSORIES</div>
                                <div className={header.header__itemChildren}>BAGS</div>
                                <div className={header.header__itemChildren}>SALE</div>
                            </div>
                        </div>
                    </div>
                    <div className={header.header__item}>Restocks</div>
                    <div className={header.header__item}>New</div>
                    <div className={header.header__item}>Contact</div>
                    <div className={header.header__item}>About</div>
                </div>
                <div className={header.header__icons}>
                    <div className={header.header__icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            stroke="#000"
                            fill="none"
                        >
                            <path
                                d="M10.133 1.06818C15.132 1.06818 19.2659 5.20205 19.2659 10.2011C19.2659 15.2002 15.132 19.3341 10.133 19.3341C5.13386 19.3341 1 15.2002 1 10.2011C1 6.64409 3.01888 3.56773 5.9991 2.02955"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M20.2273 20.2955L18.3046 18.3727"
                                stroke="#000;"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <div className={header.header__icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
                            <path
                                d="M12.6705 3.13636C13.2046 3.88409 13.525 4.84545 13.525 5.80682C13.525 8.37046 11.4955 10.4 8.93186 10.5068C8.82504 10.5068 8.71823 10.5068 8.61142 10.5068C6.26142 10.4 4.33868 8.58409 4.12504 6.34091C3.80459 3.56364 6.04779 1.10682 8.82507 1"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M3.37732 14.4591C0.813681 16.1682 0.813681 19.0523 3.37732 20.7614C6.36823 22.6841 11.175 22.6841 14.0591 20.7614C16.6228 19.0523 16.6228 16.1682 14.0591 14.4591C11.175 12.5364 6.36823 12.5364 3.37732 14.4591Z"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <Link to="/cart" className={`${header.header__icon} ${header.cart}`}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M8.89999 1L5.05457 4.84546"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M15.7364 1L19.5818 4.84547"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M1.63635 7.19548C1.63635 5.27275 2.70455 5.05911 3.98637 5.05911H20.65C21.9318 5.05911 23 5.27275 23 7.19548C23 9.54548 21.9318 9.33184 20.65 9.33184H3.98637C2.70455 9.33184 1.63635 9.54548 1.63635 7.19548Z"
                                    stroke="#000"
                                    strokeWidth="2"
                                ></path>
                                <path
                                    d="M9.96814 13.8182V17.6636"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M14.8818 13.8182V17.6636"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M4.73413 18.7318C5.05459 20.7614 5.90909 22.3636 8.9 22.3636H15.3091C18.6205 22.3636 19.1546 20.8682 19.475 18.9455L21.2909 9.54546"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M3.23865 9.54546L3.98639 14.1387"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
