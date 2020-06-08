import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logo from "../../img/logo.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<img className="logo mr-3" src={logo} />
			</Link>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/characters" className="nav-link">
							Characters
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/planets" className="nav-link">
							Planets
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/vehicles" className="nav-link">
							Vehicles
						</Link>
					</li>
				</ul>
			</div>

			<button type="button" className="btn btn-secondary btn-sm">
				Favorites
			</button>
		</nav>
	);
};
