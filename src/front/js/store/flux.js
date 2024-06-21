const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			signupMessage: null,
			isSignUpSuccessful: false,
			isLoginSuccessful: false,
			loginMessage: null,
			invoiceMessage: null,
			invoices: []
			},
		actions: {
			
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			syncTokenFromSessionStore: () => {
				const sessionToken = sessionStorage.getItem('token');
				console.log("Application just loaded. Syncing the sessionStorage token.")
				if (sessionToken && sessionToken !== "" && sessionToken !== undefined) {
					setStore({token: sessionToken})
				}
			},

			login: async (userEmail, userPassword) => {
				const response = await fetch(`${process.env.BACKEND_URL}api/token`,{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: userEmail, 
						password: userPassword
					}),
				});

				if(!response.ok){
					console.log("error: " ,response.status, response.statusText)
					return false;
				}
				const data = await response.json();
				sessionStorage.setItem("token", data.access_token)
				setStore({
					loginMessage:data.msg,
					token: data.access_token,
					isLoginSuccessful: true
				})
				return data;
			},

			//logout allows removal of the token from the store and sessionStorage
			logout: () => {
				sessionStorage.removeItem("token")
				setStore({token: null})
				console.log("You've logged out")
			},

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			signup: async(userEmail,userPassword) => {
				const options = {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: userEmail, 
						password: userPassword
					}),
				}
				const response = await fetch(`${process.env.BACKEND_URL}api/signup`, options)

				if (!response.ok) {
					const data = await response.json()
					setStore({signupMessage: data.msg})
					return{
						error: {
							status: response.status,
							statusText: response.statusText
						}
					}
				}

				const data = await response.json()
				setStore({
					signupMessage: data.msg,
					isSignUpSuccessful: response.ok
				})
				return data;
			}
		}
	};
};

export default getState;
