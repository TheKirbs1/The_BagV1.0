import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate, Link } from "react-router-dom";
import '../../styles/login.css'

export const Login = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let token = sessionStorage.getItem("token");
	 const handleClick = () => {
		actions.login(email, password)
	 }

	 useEffect (() => {
        if(store.isLoginSuccessful) {
            navigate("/login")
        }
    }, [store.isLoginSuccessful])


	 return(
        <div className="login-page">
            {store.token && store.token !== "" && store.token !== undefined ? (
            <>
                <h1>You are logged in</h1>
                <Link to="/private">
                    <button>Go to your invoices</button>
                </Link>
            </>
            ) : (
            <>
                <div className="title">
                    <h1>Login</h1>
                </div>
                <div>{store.loginMessage || ""}</div>
                <div classname="inputs">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button onClick={handleClick}>Login</button>
                </div>
                <div>
                    <Link to="/signup" className="btn btn-info">
                        New User
                    </Link>
                </div>
            </>
            )}
        </div>
    )}