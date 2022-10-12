import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'
import "../../styles/home.css";

export const Login = () => {
    const {store, actions} = useContext(Context);
	const navigate = useNavigate();
	
    useEffect(()=> {}, []);

	

	return (
		<>
		<div className="container text-center">
			<div className="row">
				<div className="col-sm-10">
<h1>Login</h1>
					<form 
					className=""
					onSubmit={(e) => actions.handleLogin(e, navigate)}>

						<div className="row">
							<label
							className="col-form-label col-sm-3"
							htmlFor="inputEmail">
								Email
							</label>

							<div className="col-sm-9">

								<input
								className="form-control"
								type="email"
								name="email"
								id="email"
								value={store.email}
								onChange={actions.handleChange}
								/>

							</div>
						</div>

						<div className="row">
							<label
							className="col-sm-3"
							htmlFor="inputPassword">
								Password
							</label>

							<div className="col-sm-9">

								<input
								className="form-control"
								type="password"
								name="password"
								id="password"
								value={store.password}
								onChange={actions.handleChange}
								/>

							</div>
						</div>

						<div className="">
							<button
							className="btn-secondary"
							type="submit"> Login </button>
						</div>
						<div className='mt-3 d-flex justify-content-center'><p>¿You don't have an account? <Link to='/register'>Sign Up!</Link></p></div>

					</form>
				</div>
			</div>
			
			
		</div>

		</>

	);
};

