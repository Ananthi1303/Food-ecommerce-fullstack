import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Order() {

    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCart();
    }, []);

    const getCart = async () => {

        const res = await API.get("/Cart");

        setCartItems(res.data);
    };

    const totalAmount = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const confirmOrder = async () => {

        try {

            const order = {
                totalAmount,
                orderDate: new Date()
            };

            await API.post("/Order", order);

            for (const item of cartItems) {

                await API.delete(`/Cart/${item.id}`);
            }

            alert("Order Confirmed");

            navigate("/orderhistory");

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="container mt-5">

            <h2>Order Confirmation</h2>

            {
                cartItems.map(item => (

                    <div
                        key={item.id}
                        className="card p-3 mb-3"
                    >

                        <h4>{item.name}</h4>

                        <p>Price : ₹ {item.price}</p>

                        <p>Quantity : {item.quantity}</p>

                        <p>
                            Total :
                            ₹ {item.price * item.quantity}
                        </p>

                    </div>
                ))
            }

            <h3>
                Grand Total : ₹ {totalAmount}
            </h3>

            <button
                className="btn btn-success mt-3"
                onClick={()=>{

                      alert("Your order has been confirmed. Proceeding to Payment...");

                      navigate("/payment");
                }}
            >
                Confirm Order
            </button>

        </div>
    );
}

export default Order;