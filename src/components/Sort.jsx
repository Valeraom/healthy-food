import React from "react";
import { AppContext } from "../App";

function Sort() {
    const { sortType, setSortType } = React.useContext(AppContext);
    const [isOpen, setIsOpen] = React.useState(false);
    const list = [
        { name: 'популярністю', sortProperty: 'rating' },
        { name: 'ціною', sortProperty: 'price' },
        { name: 'алфавітом', sortProperty: 'title' }
    ];

    const onClickListItem = (obj) => {
        setSortType(obj);
        setIsOpen(false);
    }
    return (
        <div className="sort">
            <div>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортування за: </b>
                <span onClick={() => setIsOpen(!isOpen)}>{sortType.name}</span>
            </div>
            {
                isOpen && (
                    <div className="sort__popup">
                        <ul>
                            {
                                list.map((obj, i) => (
                                    <li
                                        key={i}
                                        onClick={() => onClickListItem(obj)}
                                        className={sortType.sortProperty === obj.sortProperty ? 'active' : ''}>
                                        {obj.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Sort;