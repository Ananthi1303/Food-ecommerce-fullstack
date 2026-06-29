
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";

// function Payment() {

//     const [cartItems, setCartItems] = useState([]);
//     const [paymentMethod, setPaymentMethod] = useState("");

//     const navigate = useNavigate();

//     useEffect(() => {
//         getCart();
//     }, []);

//     const getCart = async () => {

//         try {

//             const res = await API.get("/Cart");

//             setCartItems(res.data);

//         }

//         catch (error) {

//             console.log(error);

//         }

//     };

//     const totalAmount = cartItems.reduce(

//         (total, item) =>

//             total + item.price * item.quantity,

//         0

//     );

//     const payNow = async () => {

//         if (paymentMethod === "") {

//             alert("Please select a payment method");

//             return;

//         }

//         try {

//             const order = {

//                 totalAmount: totalAmount,

//                 orderDate: new Date()

//             };

//             await API.post("/Order", order);

//            alert("Payment Successful");

//             navigate("/orderhistory");

//         }

//         catch (error) {

//             console.log(error);

//             alert("Payment Failed");

//         }

//     };

//     return (

//         <div className="container mt-5">

//             <div className="card shadow p-4">

//                 <h2 className="text-center mb-4">
//                     Payment
//                 </h2>

//                 <h4 className="mb-4">
//                     Total Amount :
//                     <span className="text-success">
//                         ₹ {totalAmount}
//                     </span>
//                 </h4>

//                 <label className="form-label">
//                     Select Payment Method
//                 </label>

//                 <select
//                     className="form-select"
//                     value={paymentMethod}
//                     onChange={(e) =>
//                         setPaymentMethod(e.target.value)
//                     }
//                 >

//                     <option value="">
//                         Select Payment
//                     </option>

//                     <option value="UPI">
//                         UPI
//                     </option>

//                     <option value="Credit Card">
//                         Credit Card
//                     </option>

//                     <option value="Debit Card">
//                         Debit Card
//                     </option>

//                     <option value="Cash On Delivery">
//                         Cash On Delivery
//                     </option>

//                 </select>

//                 <button
//                     className="btn btn-success mt-4"
//                     onClick={payNow}
//                 >
//                     Pay Now
//                 </button>

//             </div>

//         </div>

//     );

// }

// export default Payment;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Payment() {

  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    getCart();
  }, []);


  const getCart = async () => {

    try {

      const res = await API.get("/Cart");

      setCartItems(res.data);

    }
    catch(error){

      console.log(error);

    }

  };


  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const payNow = async () => {

    if(paymentMethod === ""){

      alert("Please Select Payment Method");

      return;

    }


    try{

      await API.post("/Order");


      alert("Payment Successful");


      navigate("/orderhistory");

    }
    catch(error){

      console.log(error);

      alert("Payment Failed");

    }

  };


  return (

    <div 
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:"#f8f9fa"
      }}
    >


      <div className="card shadow-lg border-0 rounded-5 p-3"
           style={{
            width:"450px"
           }}>


        {/* Header */}

        <div 
          className="text-center rounded-4 p-4 text-white"
          style={{
            background:"linear-gradient(135deg,#198754,#20c997)"
          }}
        >

          <div style={{fontSize:"45px"}}>
            💳
          </div>

          <h3 className="fw-bold">
            Payment
          </h3>

          <p className="mb-0">
            Complete your order securely
          </p>

        </div>



        <div className="card-body">


          {/* Amount */}

          <div 
            className="text-center p-3 rounded-4 mb-4"
            style={{
              background:"#f1fdf7"
            }}
          >

            <p className="text-muted mb-1">
              Total Amount
            </p>


            <h1 className="fw-bold text-success">

              ₹ {totalAmount}

            </h1>


          </div>



          {/* Payment */}

          <label className="fw-bold mb-2">

            Select Payment Method

          </label>


          <select

            className="form-select form-select-lg mb-4"

            value={paymentMethod}

            onChange={(e)=>
              setPaymentMethod(e.target.value)
            }

          >

            <option value="">
              Choose Payment
            </option>


            <option value="UPI">
              📱 UPI
            </option>


            <option value="Credit Card">
              💳 Credit Card
            </option>


            <option value="Debit Card">
              💳 Debit Card
            </option>


            <option value="Cash On Delivery">
              🚚 Cash On Delivery
            </option>


          </select>




          {/* Button */}


          <button

            className="btn btn-success btn-lg w-100 rounded-pill"

            onClick={payNow}

          >

            Pay Now

          </button>



          <p className="text-center text-muted mt-3 mb-0">

            🔒 Secure Payment

          </p>



        </div>


      </div>


    </div>

  );

}


export default Payment;