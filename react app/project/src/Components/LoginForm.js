import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import mystore from './Store';
import './style.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import email from "../images/email.png";
import lock from "../images/lock.png";
import profile from "../images/icon.jpg";

function LoginForm()   // Using Functional Component
{
    let navigate = useNavigate();

    const [logindata, setLogindata] = useState({
        email_id: "",
        password: ""

    });

    const [password, setpassword] = useState("text");
    const [isChecked, setIsChecked] = useState(false);

       const handleShowPassword=()=>{
        setIsChecked(!isChecked);
    }
    useEffect(()=>{
        if(isChecked==true){
            setpassword("text");
            return;
        }
        setpassword("password");
    },[isChecked])

    const handleInput = (ev) => {

        setLogindata((logindata) => ({
            ...logindata,
            [ev.target.name]: ev.target.value
        }));

    }
   
    const submit = (ev) => {
        ev.preventDefault();
        // alert("Logging in.......");

        console.log(JSON.stringify(logindata));
        const reqData =
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email_id: logindata.email_id,
                password: logindata.password

            })
        }
        console.log(reqData);
        fetch("http://localhost:8080/login", reqData)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                console.log(data.length);
                if (data.length !== 0) {
                    console.log(data.length);
                    console.log(data.userType.type);

                    if (data.userType.type === 'Customer') {
                        localStorage.setItem("loggedinusercon", JSON.stringify(data));
                        navigate('/ConsumerHome');
                        mystore.dispatch({ type: 'LOGGEDIN' });
                    }
                    else if (data.userType.type === 'Mess Owner') {
                        localStorage.setItem("messOwnerData", JSON.stringify(data));
                        navigate('/MessOwnerHome');
                        mystore.dispatch({ type: 'LOGGEDIN' });
                    }
                    else if (data.userType.type === 'Admin') {
                        localStorage.setItem("adminData", JSON.stringify(data));
                        navigate('/AdminHome');
                        mystore.dispatch({ type: 'LOGGEDIN' });
                    }
                    console.log("Successfull");
                    console.log(data.name);

                }
                else {
                    console.log("Failed");
                    alert("Invalid Id or Password");
                }

            });
    }

    return (
        <div>
            <div className='imgs'>
                <br></br>
                <div className='container-image'>
                    <img src={profile} alt='profile' className='profile' height="100" width="100" />
                </div>
            </div>
            <div>
                <h1 className='LHeader'>Login</h1>
            </div>
            <Form className="was-validated" style={{ width: 700, marginTop: 20, marginLeft: 320 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Enter Email Id</Form.Label>
                    <Form.Control type="email" name="email_id" placeholder="Enter Email " onChange={handleInput} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type={password} name="password" value={logindata.password} placeholder="Enter Password" onChange={handleInput} required />
                   <br></br> <span><input type="checkbox" checked={isChecked} onChange={handleShowPassword} style={{'marginLeft':'10px'}} id="show"></input>
                    &nbsp;</span><label htmlFor="show">Show Password</label>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" onClick={submit}> Sign in </Button><hr />
                <Button onClick={() => { navigate('/Register') }}>New User</Button>
            </Form>

        </div>
/*     <div className = "form-group">
                        <label> Password: </label>
                        <input type={passType} placeholder="Password" name="password" className="form-control" 
                            value={data.password} onChange={changeHandler}/>
                            <span><input type="checkbox" checked={isChecked} onChange={handleShowPassword} style={{'marginLeft':'150px'}} id="show"></input>&emsp;</span><label htmlFor="show">Show Password</label>
                            
                    </div >*/
                    /*const [passType, setPassType] = useState("text");
    const [isChecked, setIsChecked] = useState(false);


    useEffect(()=>{
        loadCaptchaEnginge(6,'red','black','upper'); 
       },[])
       const handleShowPassword=()=>{
        setIsChecked(!isChecked);
    }
    useEffect(()=>{
        if(isChecked==true){
            setPassType("text");
            return;
        }
        setPassType("password");
    },[isChecked])
 */
    )

}
export default LoginForm;
