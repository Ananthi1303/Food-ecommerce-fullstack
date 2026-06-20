import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/Api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {

        try {

            const user = {
                email,
                password
            };

            const res = await API.post("/Auth/login", user);

            console.log(res.data);

            alert("Login Success");

            navigate("/foods");

        }
        catch (error) {

            console.log(error);

            alert("Invalid Email or Password");
        }
    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2 className="auth-title">
                    Login
                </h2>

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
                    onClick={login}
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;







  //       // TOKEN SAVE
            // localStorage.setItem(
            //     "token",
            //     res.data.token
            // );