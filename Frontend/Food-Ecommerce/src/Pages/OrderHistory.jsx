import { useEffect, useState } from "react";
import API from "../services/api";

function OrderHistory() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        getOrders();

    }, []);

    const getOrders = async () => {

        try {

            const res = await API.get("/Order");

            setOrders(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="container mt-5">

            <h2>Order History</h2>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>Order Id</th>

                        <th>Total Amount</th>

                        <th>Order Date</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        orders.map(order => (

                            <tr key={order.id}>

                                <td>{order.id}</td>

                                <td>
                                    ₹ {order.totalAmount}
                                </td>

                                <td>
                                    {
                                        new Date(
                                            order.orderDate
                                        ).toLocaleString()
                                    }
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default OrderHistory;