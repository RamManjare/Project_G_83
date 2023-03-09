import React from 'react';

import mystore from './Store';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';



export default function ConsumerHome() {
    let navigate = useNavigate();



    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusercon");

        navigate('/Homepage');
    }

    return (
        <div
            style={{
                backgroundImage:
                    "url('images/img1.jpg')",
                height: '10vh',
                marginTop: '-10px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: 1.0
            }}>

            {/* <img src='' height='100' width='100' /> */}
            <nav class="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='logo.jpeg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{ color: "blue" }}><b>Available Mess Details</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/mymess" ><b>Registered Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>

            <br /><br />
            <h5 className='info' style={{ color: "black", textAlign: "left" }}> <b>Your ID : {JSON.parse(localStorage.getItem("loggedinusercon")).user_id} </b></h5>
            <h1 className='info' style={{ color: "blue" }}>  Welcome {JSON.parse(localStorage.getItem("loggedinusercon")).name} </h1>



            <br /> <br />


            {(() => {

                if (JSON.parse(localStorage.getItem("loggedinusercon")).mess_id != null) {
                    return (
                        <div>
                            <h3 className='info' style={{ color: "black" }}> Registered Mess Name: {JSON.parse(localStorage.getItem("loggedinusercon")).mess_id.mess_name} </h3>

                            <h3 className='info' style={{ color: "black" }}> Registered Mess Type: {JSON.parse(localStorage.getItem("loggedinusercon")).mess_id.mess_type} </h3>
                        </div>
                    )
                }
            })()}

            <br /><br />
            <h4 className='info' style={{ color: "black" }}>Enjoy Our Service...</h4>
            <img src='logo.jpeg' height="80" width="80" />
            <br />


        </div>

    )
}

