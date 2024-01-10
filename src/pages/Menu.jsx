import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

function Menu({ searchInput, setSearchInput, onChangeSearchInput, isLoading }) {

    const { items, onAddCartItem, onAddFavorite } = React.useContext(AppContext);

    const renderItems = () => {
        const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()));

        return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onPlus={(obj) => onAddCartItem(obj)}
                onFavorite={(obj) => onAddFavorite(obj)}
                loading={isLoading}
                {...item}
            />
        ));
    };

    return (<div>
        <div className='d-flex justify-between align-center mb-15'>
            <Categories />
            <Sort />
        </div>
        <div className="d-flex justify-between mb-40 align-center">
            <h3>{searchInput ? `Пошук за запитом "${searchInput}"` : 'Всі страви'}</h3>
            <div className="search-block d-flex">
                <img src="img/search.svg" alt="search" />
                {searchInput && <img className="remove-btn" src="img/remove-btn.svg" alt="remove-btn" onClick={() => setSearchInput('')} />}
                <input type="text" placeholder="Пошук..." value={searchInput} onChange={(event) => onChangeSearchInput(event)} />
            </div>
        </div>
        <div className="d-flex flex-wrap">
            {
                renderItems()
            }
        </div>
    </div>
    )
}

export default Menu;