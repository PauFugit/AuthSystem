import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { styles } from "../../styles/private.css";




export const Private = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('')


	useEffect(() => {
		fetch('http://127.0.0.1:3001//private', {
			method: ' GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.getItem('token')
			}
		})
			.then((response) => {
				if (response.status === 401 || response.status === 422) {
					console.log('UNAUTHORIZED')
					handleLogoutLogin();
				} else {
					return response.json()
				}
			})
			.then((data) => console.log(data))
			.catch((error) => console.log(error))

		setUsername(sessionStorage.getItem('user'))
	}, [])

	let record = useNavigate()
	const handleLogout = () => {
		setTimeout(() => { record('/login') }, 2500)
		sessionStorage.clear()
		toast.warning('Logging out, please wait');
	}

	const handleLogoutLogin = () => {
		record('/login')
		sessionStorage.clear()
	}


	return (
		<>
			<div className="container">

				<div className="row">
					<div className="col-sm-10 private-titles">

						<div className="jumbotron">
							<h1 className="title-jumbotron-private display-4">Hi, stranger!</h1>
							<p className="lead title-private-two">This is your private page :D</p>

							<p className="lead">
								<div className="button text-center private-section">
									<button
										className="btn-secondary w-100 private-button"
										onClick={() => handleLogout()}> Logout </button>
								</div>
							</p>
						</div>
					</div>


				</div>

			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</>

	);
};


