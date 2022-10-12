import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../styles/home.css";



export const Private = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('')


	useEffect(()=>{
		fetch('http://127.0.0.1:3001//private',{
			method: ' GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer '+ sessionStorage.getItem('token')
		}
	})
			.then((response)=> {
				if (response.status === 401 || response.status ===422){
					console.log('UNAUTHORIZED')
					handleLogoutLogin();
				}else{
					return response.json()
				}
			})
			.then((data)=> console.log(data))
			.catch((error)=> console.log(error))

		setUsername(sessionStorage.getItem('user'))
	}, [])

	let record = useNavigate()
	const handleLogout = () =>{
		setTimeout(() => {record('/login')}, 2500)
		sessionStorage.clear()
		toast.warning('Logging out, please wait');
	}

	const handleLogoutLogin = () =>{
		record('/login')
		sessionStorage.clear()
	}


	return (
		<>
		<div className="container text-center">
			<div className="row">
				<div className="col-sm-10">

					<h1> Hi, this is your private page</h1>
					<h2>Welcome, stranger!</h2>
				</div>


			</div>
			<div className="button text-center">
			<button
			className=""
			onClick={()=> handleLogout()}> Logout </button>
			</div>
		</div>

		</>

	);
};


