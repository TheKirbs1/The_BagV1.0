import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import meteorBag from "../../img/meteorBag.png"
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 text-danger">
			<div className="" >
				<img src={meteorBag} className="img-fluid rounded" style={{width: 300, height: 300}} />
				</div>
			<h1>
				This will eventually be a dope ass Landing Page
			</h1>
		</div>
	);
};
