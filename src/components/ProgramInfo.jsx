import React from 'react';
import { AppContext } from '../App';
import Ration from './Ration';



function ProgramInfo({ 
    calories, 
    title, 
    description, 
    imageUrl, 
    menu, 
    price,
    isLoading }) {

    const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    const [activeIndexDay, setActiveIndexDay] = React.useState(0);
    const {onAddCartItem, isItemAdded} = React.useContext(AppContext);

    const onClickCategory = (index) => {
        setActiveIndexDay(index);
    }

    return (
        <div className='programInfo' >
            <h3>{title}</h3>
            <div className="d-flex justify-between align-center mb-50">
                <img className="mr-30" width={560} height={380} src={imageUrl} alt="img" />
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className='days d-flex justify-center mb-40'>
                {
                    days.map((item, i) =>
                    (<li onClick={() => onClickCategory(i)} className={activeIndexDay === i ? 'active' : ''}>
                        {item}
                    </li>
                    ))
                }
            </div>
            {
                menu.map((item, i) => (
                    activeIndexDay === i && <Ration calories={calories} {...item} />
                ))
            }
            <div className='prices d-flex justify-center align-center'>
                <div className='price-item'>
                    <p>7 днів</p>
                    <p>{price[0]} грн</p>
                    <button className={isItemAdded(`${title} (7 днів)`)? 'addProgramButton added' : 'addProgramButton'} onClick={() => onAddCartItem({title: `${title} (7 днів)`, description, imageUrl, price: price[0]})}>
                    { isItemAdded(`${title} (7 днів)`) ? "Додано" : "Додати"}
                    </button>
                </div>
                <div className='price-item'>
                    <p>14 днів</p>
                    <p>{price[1]} грн</p>
                    <button className={isItemAdded(`${title} (14 днів)`)? 'addProgramButton added' : 'addProgramButton'} onClick={() => onAddCartItem({title: `${title} (14 днів)`, description, imageUrl, price: price[1]})}>
                    { isItemAdded(`${title} (14 днів)`) ? "Додано" : "Додати"}
                    </button>
                </div>
                <div className='price-item'>
                    <p>28 днів</p>
                    <p>{price[2]} грн</p>
                    <button className={isItemAdded(`${title} (28 днів)`)? 'addProgramButton added' : 'addProgramButton'} onClick={() => onAddCartItem({title: `${title} (28 днів)`, description, imageUrl, price: price[2]})}>
                    { isItemAdded(`${title} (28 днів)`) ? "Додано" : "Додати"}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ProgramInfo;