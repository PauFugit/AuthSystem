import Swal from 'sweetalert2'


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "http://127.0.0.1:3001",
			email: "",
			password: "",
			errors: null,

		},
		
		actions: {
			handleChange: (e) => {
				const { name, value } = e.target;
				setStore({
					[name]: value,
				});
			},
			handleLogin: async (e, navigate) => {
				e.preventDefault();

				const { apiURL, email, password } = getStore();

				const inserts = {
					email: email,
					password: password,
				};

				const response = await fetch(`${apiURL}/api/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(inserts),
				});

				const { status, message, data } = await response.json();

				console.log(data)

				if (status === "failed") {
					toast.error(message);
				}
				if (status === "success") {
					Swal.fire({
						icon: "success",
						title: message,
						showConfirmButton: false,
						timer: 1500,
					});

					// Saving user data on session storage
					sessionStorage.setItem("currentUsers", JSON.stringify(data));

					setStore({
						currentUsers: data,
						// clear data if user sign out
						email: "",
						password: "",
					});

					navigate("/private");
				}
			},

			handleRegister: async (e, navigate) => {
				e.preventDefault();

				const { apiURL, email, password } = getStore();

				const inserts = {
					email: email,
					password: password,
				};

				// Fetching data from API
				const response = await fetch(`${apiURL}/api/register`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(inserts),
				});

				const { status, message, data } = await response.json();

				console.log(data);

				if (status === "failed") {
					toast.error(message);
				}
				if (status === "success") {
					Swal.fire({
						icon: "success",
						title: message,
						showConfirmButton: false,
						timer: 1500,
					});

					sessionStorage.setItem("currentUsers", JSON.stringify(data));

					setStore({
						currentUsers: data,
						// clear password on login so if user goes to update profile, the password field is blank
						password: "",
					});

					navigate("/login");
				}
			},

			
			verifyAuth: () => {
				if (sessionStorage.getItem("currentUsers")) {
					setStore({
						currentUsers: JSON.parse(sessionStorage.getItem("currentUsers")),
					});
				}
			},

			

			
		},
	};
};

export default getState;
