import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import mystore from './Store';


const init = {
    mess_id: "",
    user_id: "",
    review: "",
    stars: "",
    review_date: new Date()
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.field]: action.val };
        case 'clear':
            return init;
    }
}
let RegistrationComponent = () => {

    let navigate = useNavigate();
    const [user, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const [clr, setColor] = useState("");

    var userid = JSON.parse(localStorage.getItem("loggedinusercon")).user_id;
    console.log(userid);
    var messid = localStorage.getItem("feedbackid");

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusercon");

        navigate('/Homepage');
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(user.stars));
        const reqData = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                mess_id: messid,
                user_id: userid,
                review: user.review,
                stars: user.stars,
                review_date: new Date()

            })

        }
        fetch("http://localhost:8080/saveRating", reqData)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.user_id !== undefined) {
                    //setMsg("Succesfully Saved with user id "+data.user_id);
                    //setColor("green");
                    //alert("Succesfully Saved with user id" + data.user_id + "\n Now Login Using emailid and password");
                    navigate('/ConsumerHome');
                    console.log(data);
                }
                else {
                    setMsg("Unsucessfull");
                    setColor("red");
                }

            })
    }

    return (
        <div>
            <nav className="navbar navbar-default" >
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{ color: "blue" }}><b>Available Mess Details</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/mymess" ><b>Registered Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>
            <br />
            <br />
            <br />
            <Form style={{ width: 700, marginTop: 100, marginLeft: 400 }}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label><span style={{ color: "darkgreen" }}>Review on Serivice/Taste</span></Form.Label>
                    <Form.Control type="text" name="review" placeholder="Review" value={user.review}
                        onChange={(e) => { dispatch({ type: 'update', field: 'review', val: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label><span style={{ color: "darkgreen" }}>Rate out of 5</span></Form.Label>
                    <Form.Control type="number" name="rating" placeholder="Rating" value={user.stars}
                        onChange={(e) => { dispatch({ type: 'update', field: 'stars', val: e.target.value }) }} />
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 1 }}>
                        <Button type="button" onClick={sendData}>Send-Feedback</Button>
                    </Col>
                </Form.Group>

            </Form>

            <h2 style={{ color: clr }}>{msg}</h2>
        </div>

    )
}
export default RegistrationComponent;