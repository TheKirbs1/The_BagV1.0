import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {

    const { store,actions } = useContext(Context);
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    
    let navigate = useNavigate();

    const submitUser = (e) => {
        e.preventDefault()
        actions.setNewContact(email, password)
        setEmail("")
        setPassword("")
        navigate("/") 
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">Email address</label>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword" className="form-label">Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp"/>
                </div>
                <button onClick={(e) => submitUser(e)} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}


