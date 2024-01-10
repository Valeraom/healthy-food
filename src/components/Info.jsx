import React from "react";
import { AppContext } from "../App";

function Info({title, description, image}) {

    const {setOpennedCart} = React.useContext(AppContext);

    return(
        <div className="d-flex flex align-center justify-center flex-column">
        <div className="cartEmpty">
            <img className="mb-20" width={120} height={120} src={image} alt="img" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button className="greenButton" onClick={() => setOpennedCart(false)}>
                <img src="img/arrow.svg" alt="arrow" />Повернутися назад
            </button>
        </div>
    </div>
    )
}

export default Info;