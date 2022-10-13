import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'
import { styles } from "../../styles/login.css";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => { }, []);



	return (
		<>
			<div className="container text-center cont-login">

				<form
					className=""
					onSubmit={(e) => actions.handleLogin(e, navigate)}>
					<div className="row">
						<div className="col-sm-10">
							<h1 className="login-title">Login</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<label
								className="col-form-label label-login"
								htmlFor="inputEmail">
								Email
							</label>
						</div>

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
						<div className="col-sm-3">
							<label
								className="col-form-label label-login"
								htmlFor="inputPassword">
								Password
							</label>
						</div>
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

					<div className="row">
						<div className="col-sm-12 login-section ">
							<button
								className="btn-secondary login-button w-50"
								type="submit"> Login </button>
						</div>
						<div className=' d-flex justify-content-center'><p><small><em>¿You don't have an account? </em><Link to='/register'>Sign Up!</Link></small></p></div>

					</div>

				</form>

			</div>

		</>

	);
};

