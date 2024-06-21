import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
    const { store,actions } = useContext(Context);
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    let navigate = useNavigate();
    const handleClick = () => {
		actions.signup(email, password)
	}

    useEffect (() => {
        if(store.isSignUpSuccessful) {
            navigate("/login")
        }
    }, [store.isSignUpSuccessful])

    return(
        <>
            <div className="signup-page">
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    {store.signupMessage || ""}
                </div>
                <div>
                    <input 
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button onClick={handleClick}>
                        Sign Up
                    </button>
                </div>


            </div>
        </>
    );
}


























//     const { store,actions } = useContext(Context);
//     const [password,setPassword] = useState("");
//     const [email,setEmail] = useState("");
    
//     let navigate = useNavigate();

//     const submitUser = (e) => {
//         e.preventDefault()
//         actions.setNewUser(email, password)
//         setEmail("")
//         setPassword("")
//         navigate("/") 
//     }

//     return (
//         <>
//             <form>
//                 <div className="mb-3">
//                     <label for="exampleInputEmail" className="form-label">Email address</label>
//                     <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleInputPassword" className="form-label">Password</label>
//                     <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp"/>
//                 </div>
//                 <button onClick={(e) => submitUser(e)} type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </>
//     );
// }


