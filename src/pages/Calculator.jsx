import React from 'react';

function Calculator() {

    const [gender, setGender] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [age, setAge] = React.useState('');
    const [activity, setActivity] = React.useState('');
    const [result, setResult] = React.useState(0);

    const onChangeGender = (event) => {
        setGender(event.target.value);
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value);
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value);
    }

    const onChangeAge = (event) => {
        setAge(event.target.value);
    }

    const onChangeActivity = (event) => {
        setActivity(event.target.value);
    }

    const onCountCalories = (gender, height, weight, age, activity) => {
        if (gender === 'male') {
            setResult((66.5 + (13.75 * Number(weight)) + (5.003 * Number(height)) - (6.775 * Number(age))) * Number(activity));
        } else {
            setResult((655.1 + (9.563 * Number(weight)) + (1.85 * Number(height)) - (4.676 * Number(age))) * Number(activity));
        }
    }

    return (<div>
        <h3 className='mb-40'>Калькулятор калорій для підбору раціону</h3>
        <div className='calculator '>
            <div className='genderInput d-flex justify-center mb-30'>
                <div className='mr-30'>
                    <input id="male" type="radio" name="gender" value='male' onChange={(event) => onChangeGender(event)} />
                    <label for="male" className='d-flex justify-around align-center'>
                        <img width={30} height={53} src="img/man.png" alt="man" /><span>Чоловік</span>
                    </label>
                </div>
                <div>
                    <input id="female" type="radio" name="gender" value='female' onChange={(event) => onChangeGender(event)} />
                    <label for="female" className='d-flex justify-around align-center'>
                        <img width={30} height={53} src="img/woman.png" alt="woman" /><span>Жінка</span>
                    </label>
                </div>
            </div>
            <div className='infoInput d-flex justify-between align-center mb-30'>
                <p>Зріст (в см) <br /> <input type="text" name="height" value={height} onChange={(event) => onChangeHeight(event)} /></p>
                <p>Вага (в кг) <br /> <input type="text" name="weight" value={weight} onChange={(event) => onChangeWeight(event)} /></p>
                <p>Вік <br /> <input type="text" name="age" value={age} onChange={(event) => onChangeAge(event)} /></p>
            </div>

            <div className='d-flex justify-center'>
                <select className='activity mb-40' name="activity" value={activity} onChange={(event) => setActivity(event.target.value)}>
                    <option disabled>Вибрати</option>
                    <option value="1.2" >Мінімальная фізична активність</option>
                    <option value="1.375">Низька фізична активність</option>
                    <option value="1.55">Помірна фізична активність</option>
                    <option value="1.7">Висока фізична активність</option>
                    <option value="1.9">Екстремальна фізична активність</option>
                </select>
            </div>
            <div className='result'>
                <button className='greenButton' onClick={() => onCountCalories(gender, height, weight, age, activity)}>Порахувати</button>
                {result != 0 && <p>Ваш результат: {result.toFixed()} калорій</p>}
            </div>
        </div>
    </div>
    )
}

export default Calculator;