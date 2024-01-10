import React from "react";
import { AppContext } from "../App";

function Categories() {

    const categories = ['Всі', 'Основні страви', 'Сніданки', 'Перші страви', 'Салати', 'Закуски/Сендвічі'];
    const { categoryId, setCategoryId } = React.useContext(AppContext)
    
    return (
        <div className="categories">
            <ul className="d-flex">
                {
                    categories.map((item, i) =>
                    (<li onClick={() => setCategoryId(i)} className={categoryId === i ? 'active' : ''}>
                        {item}
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default Categories;