import React from "react";
import { AppContext } from "../../App";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from "./Drawer.module.scss"

function Drawer() {

    const { opennedCart, setOpennedCart, onRemoveItemCart } = React.useContext(AppContext);
    const [isOrderCompleted, setIsOrderComplited] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const {itemsCart, setItemsCart, totalPrice} = useCart();

    const onAddOrder = async () => {
        try {
            setIsOrderComplited(true);
            const {data} = await axios.post('https://653c1f14d5d6790f5ec7d68c.mockapi.io/orders', {items: itemsCart})
            setOrderId(data.id);
            itemsCart.forEach(item => {
                axios.delete(`https://651cad7c35bd4107e373067a.mockapi.io/cart/${item.id}`)
            });
            setItemsCart([]);
        } catch (error) {
            alert('Помилка під час оформлення замовлення.');
        }

        
    }

    return (
        <div className={`${styles.overlay} ${opennedCart && styles.overlayVisible}`}>
            <div className={`${styles.drawer} p-30`}>
                <h2 className="d-flex justify-between mb-30">
                    Кошик
                    <img className={styles.removeBtn} src="img/remove-btn.svg" alt="remove-btn" onClick={() => setOpennedCart(false)} />
                </h2>
                {
                    itemsCart.length === 0 ?
                        <Info
                            title= {isOrderCompleted ? 'Замовлення оформлено!' : 'Кошик порожній'}
                            description={isOrderCompleted ? `Ваше замовлення №${orderId} створено успішно` : 'Додайте хоча б один товар, щоб створити замовлення'}
                            image={isOrderCompleted ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
                        /> :
                        <div>
                            <div className={`${styles.items} mb-30`}>
                                {
                                    itemsCart.map((obj) => (
                                        <div key={obj.title} className={`${styles.cartItem} d-flex align-center mb-20`}>
                                            <img className="mr-15" width={obj.description.weight ? 80 : 100} height={70} src={obj.imageUrl} alt="sneaker" />
                                            <div className="mr-15 flex">
                                                <p className="mb-5">{obj.title}</p>
                                                <b>{obj.price} грн.</b>
                                            </div>
                                            <img className={styles.removeBtn} src="img/remove-btn.svg" alt="remove-btn-item" onClick={() => onRemoveItemCart(obj.id)} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.cartTotalBlock}>
                                <ul className="mb-40">
                                    <li className="mb-20">
                                        <span>Разом:</span>
                                        <div></div>
                                        <b>{totalPrice} грн</b>
                                    </li>
                                </ul>
                                <button className={styles.greenButton} onClick={() => onAddOrder()}>
                                    Оформити замовлення
                                    <img src="img/arrow.svg" alt="arrow"  />
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div >
    );
}

export default Drawer;