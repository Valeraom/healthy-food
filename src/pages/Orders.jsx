import React from 'react';
import Card from '../components/Card';
import axios from 'axios';

function Orders() {

    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        try {
            async function fetchData() {
                const ordersResponse = await axios.get('https://653c1f14d5d6790f5ec7d68c.mockapi.io/orders');
                setOrders(ordersResponse.data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            }
            fetchData();
        } catch (error) {
            alert('Сталася помилка');
        }
    }, [])

    return (<div>
        <h3>Мої замовлення</h3>
        <div className="d-flex flex-wrap">
            {
                (isLoading ? [...Array(8)] : orders).map((obj, index) => (
                    <Card
                        key={index}
                        {...obj}
                        loading={isLoading}
                    />
                ))
            }
        </div>
    </div>
    )
}

export default Orders;