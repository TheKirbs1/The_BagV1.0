import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let token = sessionStorage.getItem("token");
	 const handleClick = () => {
		actions.login(email, password).then( () => {
			navigate('/');
		} )
	 }

	return (
		<div className="text-center mt-5">
			{token && token !== "" && token !== undefined ?
				<>
					<h1>User logged in</h1>
				</>
			:
			<>
			<h1>Login</h1>
			<div>
				<input 
					type="text" 
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<input 
					type="password" 
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)} 
				/>
			</div>
			<div>
				<button className="btn btn-primary" onClick={handleClick}>Login</button>
			</div>
            <div>
				<button className="btn btn-info" onClick={handleClick}>New User Signup</button>
			</div>
			</>
			}			
		</div>
	);
};