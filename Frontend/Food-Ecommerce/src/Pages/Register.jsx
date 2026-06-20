import { useState } from "react";
import API from "../services/api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {

        const user = {
            name,
            email,
            password
        };

        console.log(user);

        alert("Register Success");
    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2 className="auth-title">
                    Register
                </h2>

                <input
                    type="text"
                    placeholder="Enter Name"
                    className="auth-input"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="auth-input"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    className="auth-input"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="auth-btn"
                    onClick={register}
                >
                    Register
                </button>

            </div>

        </div>
    );
}

export default Register;