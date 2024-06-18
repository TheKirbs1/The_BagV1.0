import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const signupForm = () => {

    const { store,actions } = useContext(Context);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    
    let navigate = useNavigate();

    const submitUser = (e) => {
        e.preventDefault()
        console.log(name,email,)
        actions.setNewContact(name,email,)
        setName("")
        setEmail("")
        navigate("/") 
    }

    return (
        <>
            <form>
                 <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Name</label>
                    <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputName1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button onClick={(e) => submitUser(e)} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default signupForm;
