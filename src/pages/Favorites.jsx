import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Favorites() {
   
    const {favoriteItems, onAddCartItem, onAddFavorite} = React.useContext(AppContext);
   
   return ( <div>
        <h3>Мої закладки</h3>
        <div className="d-flex flex-wrap">
            {
                favoriteItems.map((item, index) => (
                    <Card
                        key={index}
                        onPlus={(obj) => onAddCartItem(obj)}
                        onFavorite={(obj) => onAddFavorite(obj)}
                        loading={false}
                        {...item}
                    />
                ))
            }
        </div>
    </div>
   )
}

export default Favorites;