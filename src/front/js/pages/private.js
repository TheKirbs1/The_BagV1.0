import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/private.css'

export const Private = () => {
    const { store, actions } = useContext(Context);
    const [authStatus, setAuthStatus] = useState("Pending");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const authenticate = async () => {
    //         let result = await actions.getInvoices();
    //         if (result) {
    //             setAuthStatus("approved");
    //         } else {
    //             setAuthStatus("denied");
    //         }
    //     }
    //     authenticate();
    // }, [actions]);

    return (
        <div className="private-page">
            <h1>Invoices</h1>
            {authStatus === "Pending" ? (
                <p>Loading...</p>
            ) : authStatus === "denied" ? (
                <div>
                    <p>Access Denied. Please sign in to view this page.</p>
                    <button onClick={() => navigate('/login')}>Sign In</button>
                </div>
            ) : authStatus === "approved" ? (
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Invoice Number</th>
                                <th scope="col">Invoice Amount</th>
                                <th scope="col">Invoice Date</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {store.invoices.map((invoice, index) => (
                                <tr key={index}>
                                    <th scope="row">{invoice.invoice_number}</th>
                                    <td>{invoice.invoice_amount}</td>
                                    <td>{invoice.invoice_date}</td>
                                </tr>
                            ))}
                        </tbody> */}
                    </table>
                </div>
            ) : (
                <p>A problem has occurred. Try refreshing the page.</p>
            )}
        </div>
    );
}
