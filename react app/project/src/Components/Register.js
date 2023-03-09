import { useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const init = {
    name: "",
    contact_number: "",
    email_id: "",
    address: "",
    aadhar_no: "",
    type_id: "",
    password: ""

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

    const sendData = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(user));
        const reqData = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: user.name,
                contact_number: user.contact_number,
                email_id: user.email_id,
                address: user.address,
                aadhar_no: user.aadhar_no,
                type_id: user.type_id,
                password: user.password

            })

        }
        console.log(reqData);
        fetch("http://localhost:8080/saveUser", reqData)
            .then(res => res.json())
            .then(data => {

                if (data.user_id !== undefined) {
                    //setMsg("Succesfully Saved with user id "+data.user_id);
                    //setColor("green");
                    alert("Succesfully Saved Now Login Registered emailid and password");
                    navigate('/LoginForm');
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
            <h4 style={{ color: clr }}>{msg}</h4>

            <Form className="was-validated" style={{ width: 700, marginTop: 10, marginLeft: 320 }}>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label for="name"><b>Name</b></Form.Label>
                    <Form.Control type="text" name="name" placeholder="Full Name" onChange={(e) => { dispatch({ type: 'update', field: 'name', val: e.target.value }) }} required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label><b>Contact Number</b></Form.Label>
                    <Form.Control type="text" required name="contact_number" placeholder="Contact Number" onChange={(e) => { dispatch({ type: 'update', field: 'contact_number', val: e.target.value }) }} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label><b>Email Id</b></Form.Label>
                    <Form.Control type="email" name="email_id" placeholder="sample@domain.com" onChange={(e) => { dispatch({ type: 'update', field: 'email_id', val: e.target.value }) }} class="form-control" required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label><b>Address</b></Form.Label>
                    <Form.Control type="text" required name="address" placeholder="Full Address" onChange={(e) => { dispatch({ type: 'update', field: 'address', val: e.target.value }) }} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label><b>Aadhar Number</b></Form.Label>
                    <Form.Control type="number" required name="aadhar_no" placeholder="12 Digit Aadhar Number" onChange={(e) => { dispatch({ type: 'update', field: 'aadhar_no', val: e.target.value }) }} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRadio">
                    <Form.Label style={{ margin: "00px 20px 0px 0px" }}><b>Type</b></Form.Label>
                    <Form.Check inline value="10" required type="radio" name="mess_type_id" label="Consumer" onChange={(e) => { dispatch({ type: 'update', field: 'type_id', val: e.target.value }) }} />
                    <Form.Check inline value="20" required type="radio" name="mess_type_id" label="Mess-Owner" onChange={(e) => { dispatch({ type: 'update', field: 'type_id', val: e.target.value }) }} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please Select One</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" required name="password" placeholder="Password" onChange={(e) => { dispatch({ type: 'update', field: 'password', val: e.target.value }) }} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </Form.Group>

                <br />
                <Button variant="primary" type="submit" onClick={(e) => { sendData(e) }}> Click here to submit </Button><hr />
            </Form>

        </div>

    )
}
export default RegistrationComponent;