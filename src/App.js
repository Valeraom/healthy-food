import './App.css';
import 'macro-css';
import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Programs from './pages/Programs';
import Calculator from './pages/Calculator';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import ProgramInfo from './components/ProgramInfo';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярністю', sortProperty: 'rating' });
  const [programs, setPrograms] = React.useState([]);
  const [itemsCart, setItemsCart] = React.useState([]);
  const [opennedCart, setOpennedCart] = React.useState(false);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartResponse, favoritesResponse, itemsResponse, programsResponse] = await Promise.all([
          axios.get('https://651cad7c35bd4107e373067a.mockapi.io/cart'),
          axios.get('https://651cad7c35bd4107e373067a.mockapi.io/cart'),
          axios.get(`https://651cad7c35bd4107e373067a.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortType.sortProperty}&order=desc`),
          axios.get('https://655e4eaa9f1e1093c59ae18c.mockapi.io/programs')
        ]);

        setIsLoading(false);

        setItemsCart(cartResponse.data);
        setFavoriteItems(favoritesResponse.data);
        setItems(itemsResponse.data);
        setPrograms(programsResponse.data);
      } catch (error) {
        alert('Помилка під час запиту');
      }

    }
    fetchData();
  }, [categoryId, sortType]);


  const onAddCartItem = async (obj) => {
    //const removeItem = itemsCart.find(item => item.imageUrl === obj.imageUrl);
    //removeItem ? setItemsCart(itemsCart.filter(item => item.imageUrl !== obj.imageUrl)) : setItemsCart(prev => [...prev, obj]);
    try {
      let removedIdCart;
      if (itemsCart.some((item) => item.title === obj.title)) {
        itemsCart.forEach((item) => { if (item.title === obj.title) { removedIdCart = item.id; } });
        await axios.delete(`https://651cad7c35bd4107e373067a.mockapi.io/cart/${removedIdCart}`);
        setItemsCart((prev) => prev.filter((item) => item.id !== removedIdCart));
      } else {
        setItemsCart((prev) => [...prev, obj]);
        const { data } = await axios.post('https://651cad7c35bd4107e373067a.mockapi.io/cart', obj);
        setItemsCart((prev) => prev.map((item) => {
          if (item.title === obj.title) {
            return {
              ...item,
              id: data.id
            };
          }
          return item;
        }))
      }
    } catch (error) {
      alert('Произошла ошибка');
    }
  }

  const isItemAdded = (title) => {
    return itemsCart.some((obj) => obj.title === title);
  }

  const onAddFavorite = async (obj) => {
    try {
      let removedIdFav;
      if (favoriteItems.some((item) => item.title === obj.title)) {
        favoriteItems.forEach((item) => { if (item.title === obj.title) { removedIdFav = item.id; } });
        axios.delete(`https://653c1f14d5d6790f5ec7d68c.mockapi.io/favorites/${removedIdFav}`);
        setFavoriteItems((prev) => prev.filter((item) => item.id !== removedIdFav));
      } else {
        await axios.post('https://653c1f14d5d6790f5ec7d68c.mockapi.io/favorites', obj).then((res) => setFavoriteItems((prev) => [...prev, res.data]));
      }
    } catch (error) {
      alert('Произошла ошибка');
    }
  }

  const isItemFavorite = (title) => {
    return favoriteItems.some((obj) => obj.title === title);
  }

  const onRemoveItemCart = async (id) => {
    try {
      await axios.delete(`https://651cad7c35bd4107e373067a.mockapi.io/cart/${id}`);
      setItemsCart((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert('Виникла помилка під час видалення товару з кошика.');
    }

  }

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  }

  return (
    <AppContext.Provider value={{
      items,
      categoryId,
      sortType,
      programs,
      itemsCart,
      opennedCart,
      favoriteItems,
      isItemAdded,
      isItemFavorite,
      onAddCartItem,
      onAddFavorite,
      setOpennedCart,
      setItemsCart,
      setCategoryId,
      setSortType,
      onRemoveItemCart
    }}>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='' element={<About />} />
          <Route path='menu' element={<Menu
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onChangeSearchInput={onChangeSearchInput}
            isLoading={isLoading}
          />} />
          <Route path='programs' element={<Programs
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onChangeSearchInput={onChangeSearchInput}
            isLoading={isLoading}
          />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='favorites' element={<Favorites
            isLoading={isLoading}
          />} />
          <Route path='orders' element={<Orders />} />
          {
            programs.map((item) => (
              <Route path={`${item.id}/*`} element={<ProgramInfo {...item} />} />

            ))
          }
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
