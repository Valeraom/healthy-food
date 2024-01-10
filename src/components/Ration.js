import React from "react"
import ContentLoader from "react-content-loader"

function Ration({ calories, breakfast, secondBreakfast, lunch, snack, dinner, nutritionalValue, loading }) {


  return (
    <div className="d-flex justify-between align-center">
      <div className="nutritionalValue">
        <p>{calories} ккал</p>
        <p>{`Білки - ${nutritionalValue.proteins} / Жири - ${nutritionalValue.fats} / Вуглеводи - ${nutritionalValue.carbohydrates}`}</p>
      </div>
      <div className="ration">
        {
          breakfast && <div className="ration-item">
            <p><b>7:30-9:00 Сніданок</b></p>
            <p>{breakfast}</p>
          </div>
        }
        {
          secondBreakfast && <div className="ration-item">
            <p><b>10:30-11:30 Другий сніданок</b></p>
            <p>{secondBreakfast}</p>
          </div>
        }
        {
          lunch && <div className="ration-item">
            <p><b>13:00-14:30 Обід</b></p>
            <p>{lunch}</p>
          </div>
        }
        {
          snack && <div className="ration-item">
            <p><b>16:00-17:00 Полуденок</b></p>
            <p>{snack}</p>
          </div>
        }
        {
          dinner && <div className="ration-item">
            <p><b>18:00-20:00 Вечеря</b></p>
            <p>{dinner}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default Ration;