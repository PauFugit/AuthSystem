import React from "react";
import { Link } from "react-router-dom";
import {RiSpyFill} from 'react-icons/ri';
import {TbWriting} from 'react-icons/tb';
import {TbLogin} from 'react-icons/tb';


export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><RiSpyFill/> Authentication system</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/register"><TbWriting/>Register</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login"><TbLogin/>Login</Link>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	);
};
