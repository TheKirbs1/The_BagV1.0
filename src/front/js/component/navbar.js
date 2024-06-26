import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-secondary bg-secondary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://static.vecteezy.com/system/resources/previews/005/726/093/non_2x/house-icon-house-emoji-funny-house-icon-free-vector.jpg"></img></span>
				</Link>
				<div className="ml-auto">
					{!store.token ?
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
						:
						<button 
							className="btn btn-primary"
							onClick= {() => actions.logout()}
						>Log out</button>
					}
				</div>
			</div>
		</nav>
	);
};