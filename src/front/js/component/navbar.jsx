import React from "react";
import { Link } from "react-router-dom";
import { RiSpyFill } from 'react-icons/ri';
import { TbWriting } from 'react-icons/tb';
import { TbLogin } from 'react-icons/tb';
import { styles } from "../../styles/navbar.css";




export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid ">
				<Link className="navbar-brand "
					style={{ color: "rgba(4, 4, 131, 0.488)", paddingLeft: "5rem" }}
					to="/"> Auth <RiSpyFill
						style={{ color: "black" }} /> system</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"
					></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav icon-navbar"
						style={{ paddingLeft: "5rem" }}>
						<li className="nav-item">
							<Link className="nav-link p-3"
								style={{ color: "rgba(4, 4, 131, 0.488)" }}
								aria-current="page" to="/register"><TbWriting />Register</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link p-3"
								style={{ color: "rgba(4, 4, 131, 0.488)" }} to="/login"><TbLogin />Login</Link>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};
