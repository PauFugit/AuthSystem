import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { styles } from "../../styles/home.css";
import { Link } from "react-router-dom";

import { RiSpyFill } from 'react-icons/ri';

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container not-jumbotron text-center mt-5">

			<div class="jumbotron cont-home">
				<h1 class="title-jumbotron display-4">Welcome to <br></br>Auth <RiSpyFill /> System</h1>
				<p class="lead home-title-three"> ×</p>
				<p><em>What's an authentication system?</em> - Authentication systems are security measures put in place to secure data and systems by requiring additional input beyond username and password for users to access a system.
					<em> <small>[... quote from <Link to='https://www.trustradius.com'>here</Link>]</small></em></p>

				<p class="lead">
					<h3 className="home-title-three"><strong>Try the authentication system</strong></h3>
					<a class="btn jumbotron-button" href="/register" role="button">Start now!</a>
				</p>
			</div>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>

		</div>


	);
};

