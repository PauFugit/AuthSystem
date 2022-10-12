import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<h1>Welcome to the autentication system. </h1>
				
			<div className="container text-home p-5">
				<h3> What's is a authentication system?</h3>
				<p>Authentication systems are security measures put in place to secure data and systems by requiring additional input beyond username and password for users to access a system</p>
				<p>quote obtained from: 	<a href="https://www.trustradius.com/authentication-systems">here</a></p>
				</div>

				<div className="container text-try ">
			<h2>Try here the authentication system</h2>

			<div className='mt-3 d-flex justify-content-center'><p>You don't have an account? <Link to='/register'>Sign Up!</Link></p></div>
			<div className='mt-3 d-flex justify-content-center'><p>Do you already have an account?  <Link to='/login'>Log in!</Link></p></div>

			</div>
		</div>

		
	);
};

