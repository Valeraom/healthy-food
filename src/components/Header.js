import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../App";
import { useCart } from "../hooks/useCart";

function Header() {

    const { setOpennedCart } = React.useContext(AppContext);
    const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between p-40">
            <Link to="/">
                <div className="d-flex align-center	">
                    <img width={40} height={40} src="img/logo.png" alt="logo" className="mr-15" />
                    <div>
                        <h3 className="text-uppercase">HEALTHY FOOD DELIVERY</h3>
                        <p className="opacity-5">доставка здорового харчування</p>
                    </div>
                </div>
            </Link>
            <ul className="menu d-flex align-center">
                <li>
                    <NavLink to="/" >
                        Про нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu">
                        Меню
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/programs">
                        Програми
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/calculator">
                        Калькулятор
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">
                        Контакти
                    </NavLink>
                </li>
            </ul>
            <ul className="d-flex align-center cu-p">
                <li className="mr-20 align-center" onClick={() => setOpennedCart(true)}>
                    <img width={18} height={18} src="img/cart.svg" alt="cart" className="mr-5" />
                    <span>{totalPrice} грн</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} src="img/heart.svg" alt="heart" className="mr-20" />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="img/user.svg" alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;