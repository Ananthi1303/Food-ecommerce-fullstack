import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCart();
    }, []);

    const getCart = async () => {
        try{

            const res = await API.get("/Cart");

            setCartItems(res.data);
    }
    catch(error){
        console.log(error);
    }
};
    const updateQuantity = async (id, quantity) => {

        if (quantity < 1) {
            return;
        }

          await API.put(`/Cart/${id}?quantity=${quantity}`);

        getCart();
    };

    const deleteCart = async (id) => {

        try {

            await API.delete(`/Cart/${id}`);

            getCart();

        } catch (error) {

            console.log(error);

        }
    };
    const placeOrder = async () => {

        try {

            const totalAmount = cartItems.reduce(
                (total, item) =>
                    total + (item.price * item.quantity),
                0
            );

            const order = {
                totalAmount: totalAmount,
                orderDate: new Date()
            };

            await API.post("/Order", order);

            alert("Order Placed Successfully");

            for (const item of cartItems) {

                await API.delete(`/Cart/${item.id}`);
            }

            getCart();

        } catch (error) {

            console.log(error);

            alert("Order Failed");
        }
    };
    return (

        <div className="container mt-5">
            
              <h2 className="mb-4">Cart Page</h2>

            <div className="row">

                {
                    cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="col-md-4 mb-4"
                        >

                            <div className="card p-3 shadow">

                                <img
                                    src={`https://localhost:44347${item.imageUrl}`}
                                    className="img-fluid"
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover"
                                    }}
                                />

                                <h3 className="mt-3">
                                    {item.name}
                                </h3>

                                <h5>
                                    ₹ {item.price}
                                </h5>

                                <p>
                                    {item.category}
                                </p>

                                  <div className="d-flex align-items-center gap-3 mb-3">

                                    <button
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity - 1
                                            )
                                        }
                                    >
                                        -
                                    </button>

                                    <h5>
                                        {item.quantity}
                                    </h5>

                                    <button
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCart(item.id)}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>
                  {
                cartItems.length > 0 && (

                    <div className="text-center mt-4">

                 <button
    className="btn btn-success"
    onClick={() => navigate("/order")}
>
    Proceed To Order
</button>

                    </div>
               )
            }
        </div>
    );
}

export default Cart;




// import { useEffect, useState } from "react";
// import API from "../services/api";

// function Cart() {

//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         getCart();
//     }, []);

//     const getCart = async () => {

//         const res = await API.get("/Cart");

//         setCartItems(res.data);
//     };

//     const updateQuantity = async (id, quantity) => {

//         if (quantity < 1) {
//             return;
//         }

//         await API.put(`/Cart/${id}?quantity=${quantity}`);

//         getCart();
//     };

//     const deleteCart = async (id) => {

//         try {

//             await API.delete(`/Cart/${id}`);

//             getCart();

//         } catch (error) {

//             console.log(error);
//         }
//     };

//     return (

//         <div className="container mt-5">

//             <div className="d-flex justify-content-between align-items-center mb-4">

//                 <h2>Cart Page</h2>

//                 <h4>
//                     Cart Count :
//                     <span className="badge bg-primary ms-2">
//                         {cartItems.length}
//                     </span>
//                 </h4>

//             </div>

//             <div className="row">

//                 {
//                     cartItems.map((item) => (

//                         <div
//                             key={item.id}
//                             className="col-md-4 mb-4"
//                         >

//                             <div className="card p-3 shadow">

//                                 <img
//                                     src={`https://localhost:44347${item.imageUrl}`}
//                                     className="img-fluid"
//                                     style={{
//                                         width: "100%",
//                                         height: "250px",
//                                         objectFit: "cover"
//                                     }}
//                                 />

//                                 <h3 className="mt-3">
//                                     {item.name}
//                                 </h3>

//                                 <h5>
//                                     ₹ {item.price}
//                                 </h5>

//                                 <p>
//                                     {item.category}
//                                 </p>

//                                 <div className="d-flex align-items-center gap-3 mb-3">

//                                     <button
//                                         className="btn btn-secondary"
//                                         onClick={() =>
//                                             updateQuantity(
//                                                 item.id,
//                                                 item.quantity - 1
//                                             )
//                                         }
//                                     >
//                                         -
//                                     </button>

//                                     <h5>{item.quantity}</h5>

//                                     <button
//                                         className="btn btn-secondary"
//                                         onClick={() =>
//                                             updateQuantity(
//                                                 item.id,
//                                                 item.quantity + 1
//                                             )
//                                         }
//                                     >
//                                         +
//                                     </button>

//                                 </div>

//                                 <button
//                                     className="btn btn-danger"
//                                     onClick={() => deleteCart(item.id)}
//                                 >
//                                     Remove
//                                 </button>

//                             </div>

//                         </div>
//                     ))
//                 }

//             </div>

//         </div>
//     );
// }

// export default Cart;