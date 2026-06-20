import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddFood() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const addFood = async () => {

        const food = {
            name,
            price,
            category,
            imageUrl
        };

        await API.post("/Food", food);

        alert("Food Added");
    };

    return (
        <div className="container mt-5">

            <h2>Add Food</h2>

            <input
                className="form-control mb-2"
                placeholder="Food Name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="/images/burger.jpg"
                onChange={(e) => setImageUrl(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={addFood}
            >
                Add Food
            </button>

        </div>
    );
}

export default AddFood;