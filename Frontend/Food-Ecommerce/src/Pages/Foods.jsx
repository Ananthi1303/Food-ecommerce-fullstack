import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Foods({ setCartCount }) {

    const [foods, setFoods] = useState([]);
    //   const navigate = useNavigate();

    useEffect(() => {
        getFoods();
    }, []);

    const getFoods = async () => {

               try {

            const res = await API.get("/Food");

            setFoods(res.data);

        } catch (error) {

            console.log(error);

        }
    }; 
    const addToCart = async (food) => { 
        const cartItem = {
               name: food.name,
               price: food.price,
               category: food.category,
               imageUrl: food.imageUrl, 
               quantity: 1 
            };
         try { 
            await API.post("/Cart", cartItem); 
              setCartCount(prev => prev + 1);//cart lenth 
            alert("Added To Cart");
            //  navigate("/cart");
             }
              catch (error) { 
                 console.log(error);
                 alert("Error Adding To Cart"); 
                } 
            };

    return (

        <div className="container mt-5">
            
              <h2 className="mb-4">Foods Page</h2>

                        <div className="row">

                {
                    foods.map(food => (

                        <div
                            key={food.id}
                            className="col-md-4 mb-4"
                        >

                            <div className="card p-3">

                          <img
             src={`https://localhost:44347${food.imageUrl}`}
             className="img-fluid"
             style={{
             width: "100%",
             height: "250px",
             objectFit: "cover"
              }}
               />

                                <h3>{food.name}</h3>

                                <h5>₹ {food.price}</h5>

                                <p>{food.category}</p>
                                    <button
                className="btn btn-primary"
                onClick={() => addToCart(food)}  >
                Add To Cart
              </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Foods;