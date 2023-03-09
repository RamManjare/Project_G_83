import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import mystore from "./Store";


let MessRegistration = () => {

    let navigate = useNavigate();
    var data = JSON.parse(localStorage.getItem("messOwnerData"));

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("messOwnerData");

        navigate('/Homepage');
    }

    const [logindata, setLogindata] = useState({

        mess_name: "",
        mess_type_id: 0,
        location: "",
        mess_status_id: 60,
        user_id: data.user_id

    });

    const [msg, setMsg] = useState("");
    const [clr, setColor] = useState("");

    const handleInput = (ev) => {

        setLogindata((logindata) => ({
            ...logindata,
            [ev.target.name]: ev.target.value
        }));

    }

    const submit = (ev) => {
        ev.preventDefault();
        console.log(JSON.stringify(logindata));
        const reqData = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({

                mess_name: logindata.mess_name,
                mess_type_id: logindata.mess_type_id,
                location: logindata.location,
                mess_status_id: 60,
                user_id: data.user_id

            })

        }
        fetch("http://localhost:8080/saveMess", reqData)
            .then(res => res.json())
            .then(data => {

                if (data.mess_id !== undefined) {
                    setMsg("Succesfully Saved with mess id " + data.mess_id);
                    //setColor("green");
                    alert("Succesfully Saved with user id" + data.user_id + "\n Now Login Using emailid and password");
                    navigate('/MessOwnerHome');
                    console.log(data);
                }
                else {
                    setMsg("Unsucessfull");
                    setColor("red");
                }

            });

    }

    return (
        <div>

            <nav class="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/RegisterMess" style={{ color: "blue" }}><b>Register Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>
            <Form style={{ width: 700, marginTop: 100, marginLeft: 400 }}>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label><b>Mess Name</b></Form.Label>
                    <Form.Control type="text" name="mess_name" placeholder="Enter Mess Name" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRadio">
                    <Form.Label style={{ margin: "00px 20px 0px 0px" }}><b>Mess Type</b></Form.Label>
                    <Form.Check inline value="1111" type="radio" name="mess_type_id" label="Veg" onChange={handleInput} />
                    <Form.Check inline value="2222" type="radio" name="mess_type_id" label="Non-Veg" onChange={handleInput} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label><b>Mess Location</b></Form.Label>
                    <Form.Control type="text" name="location" placeholder="Enter Location" onChange={handleInput} />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" onClick={submit}> Click here to submit </Button><hr />
            </Form>
            <p style={{ color: clr }}>{msg}</p>
        </div>
    )
}
export default MessRegistration;