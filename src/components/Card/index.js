import styles from "./Card.module.scss"
import React from "react"
import ContentLoader from "react-content-loader"
import { AppContext } from "../../App";

function Card({ title, description, imageUrl, price, onPlus, onFavorite, loading }) {

    const { isItemAdded, isItemFavorite } = React.useContext(AppContext);

    const hangleAdd = () => {
        onPlus({ title, description, price, imageUrl });
    }

    const hangleFavorite = () => {
        onFavorite({ title, description, imageUrl, price });
    }

    return (
        <div className={styles.card}>
            {loading ? <ContentLoader
                speed={2}
                width={152}
                height={187}
                viewBox="0 0 152 187"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="1" y="162" rx="5" ry="5" width="80" height="24" />
                <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
                <rect x="0" y="125" rx="5" ry="5" width="93" height="15" />
                <rect x="148" y="245" rx="0" ry="0" width="0" height="1" />
                <rect x="22" y="166" rx="0" ry="0" width="1" height="0" />
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                <rect x="127" y="162" rx="5" ry="5" width="24" height="24" />
            </ContentLoader> :
                <>

                    {onFavorite &&
                        <div className={styles.card_heart}>
                            <img width={32} height={32} src={isItemFavorite(title) ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="unliked" onClick={hangleFavorite} />
                        </div>
                    }
                    <img width={description.weight ? 160 : 180} height={142} src={imageUrl} alt="dish" />
                    <h5>{title}</h5>
                    {
                        description.weight ? <div>
                            <p>Вага: {description.weight} г</p>
                            <p>Калорійність: {description.calories} ккал</p>
                            <p>Білки: {description.proteins} г</p>
                            <p>Жири: {description.fats} г</p>
                            <p>Вуглеводи: {description.carbohydrates} г</p>
                        </div> :
                            <p>{description}</p>
                    }
                    <div className="d-flex justify-between align-center mb-0 mt-10">
                        <div className="d-flex flex-column">
                            <span className="text-uppercase">Ціна:</span>
                            <b>{price} грн.</b>
                        </div>
                        {onPlus &&
                            <img className={styles.card_button} onClick={hangleAdd} src={isItemAdded(title) ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="plus" />
                        }
                    </div>
                </>}
        </div>
    );
}

export default Card;