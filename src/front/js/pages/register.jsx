import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { styles } from "../../styles/register.css";


export const Register = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => { }, []);



	return (
		<>
			<div className="container cont-register text-center">

				<form
					className="register-form"
					onSubmit={(e) => actions.handleRegister(e, navigate)}>

					<div className="row">
						<div className="col-sm-10">
							<h1 className="register-title">Register</h1>
						</div>
					</div>

					<div className="row p-2">
						<div className="col-sm-3">
							<label
								className="col-form-label label-register"
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
								placeholder="example@example.com"
								value={store.email}
								onChange={actions.handleChange}
							/>

						</div>
					</div>

					<div className="row">
						<div className="col-sm-3">
							<label
								className="col-form-label label-register"
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
								placeholder="passwordexample"
								value={store.password}
								onChange={actions.handleChange}
							/>

						</div>
					</div>


					<div className="row">
						<div className="col-sm-12 register-section">
							<button
								className="btn-secondary w-50 register-button"
								type="submit"> Sign In</button>
						</div>
					</div>
				</form>
			</div>


		</>

	);
};
