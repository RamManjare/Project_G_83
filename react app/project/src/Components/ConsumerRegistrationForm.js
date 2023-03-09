import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

class ConsumerRegistrationForm extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            username: "",
            password: "",
            consumername: "",
            contactno: "",
            mailid: "",
            currentcity: "",

        }
    }

    handleInput = (ev) => {
        const type = ev.target.type;
        const nm = ev.target.name;
        let val;
        if (type === "checkbox")
            val = ev.target.checked;
        else
            val = ev.target.value;

        this.setState({ [nm]: val });

    }

    submitForm = (ev) => {
        ev.preventDefault();
        alert("Submitting Your Form.......");
        console.log(this.state);
        const reqData =
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                consumername: this.state.consumername,
                contactno: this.state.contactno,
                mailid: this.state.mailid,
                currentcity: this.state.currentcity
            })
            //these keys will be used on server side
        }

        let flag = false;

        if (this.state.username != "" && this.state.password != "" && this.state.consumername != "" && this.state.contactno != ""
            && this.state.mailid != "" && this.state.currentcity != "") { flag = true; }
        console.log(flag);
        if (flag === true) {
            fetch("http://localhost:8080/registerconsumer", reqData)
                .then(resp => resp.json())
                .then(data => {
                    if (data.length != 0) {
                        this.setState({ msg: " Registered Successfully " })
                    }
                    else {
                        this.setState({ msg: " Failed to Register " })
                    }


                })
        }
        else {
            this.setState({ msg: " All fields are compulsory " })
        }

    }

    render() {
        return (
            <div className='info' style={{
                backgroundImage:
                    "url('images/gallery_2.jpeg')",
                height: '120vh',
                marginTop: '-50px',
                fontSize: '17px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <br /><br /><br />
                <h3 style={{ color: "blue" }}> --Consumer Registration Form-- </h3>
                <br />
                <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <table>
                        <tr>
                            <td style={{ color: "white" }}><b> Enter Username :</b>  </td>
                            <td> <input type="text" name="username" placeholder="--Username--" value={this.state.username}
                                onChange={this.handleInput} required /></td>

                        </tr>
                        <br />
                        <tr>
                            <td style={{ color: "white" }}><b> Enter Password : </b> </td>
                            <td> <input type="password" name="password" placeholder="--Password--" value={this.state.password}
                                onChange={this.handleInput} required /></td>

                        </tr>
                        <br />
                        <tr>
                            <td style={{ color: "white" }}><b> Enter Full Name :</b> </td>
                            <td> <input type="text" name="consumername" placeholder="--Fullname--" value={this.state.consumername}
                                onChange={this.handleInput} required /></td>

                        </tr>
                        <br />
                        <tr>
                            <td style={{ color: "white" }}><b> Enter Contact No : </b> </td>
                            <td> <input type="text" name="contactno" placeholder="--ConatactNo--" value={this.state.contactno}
                                onChange={this.handleInput} maxLength={10} required /></td>

                        </tr>
                        <br />
                        <tr>
                            <td style={{ color: "white" }}><b> Enter Mail ID :</b> </td>
                            <td> <input type="email" name="mailid" placeholder="--Mail--" value={this.state.mailid}
                                required onChange={this.handleInput} /></td>

                        </tr>
                        <br />
                        <tr>
                            <td style={{ color: "white" }}><b>  Enter Current City :</b> </td>
                            <td> <input type="text" name="currentcity" placeholder='--Current Address--' value={this.state.currentcity}
                                onChange={this.handleInput} /></td>

                        </tr>

                        <tr>
                            <td></td>
                            <td style={{ color: "white" }} > <input type="checkbox" name="flag" value="agree"
                                onChange={this.handleInput} /> I agree </td>
                        </tr>
                        <br />

                        <tr>
                            <td></td>
                            <td><Button bsStyle="success" type="submit" value="SUBMIT" onClick={this.submitForm} > SUBMIT</Button></td>
                        </tr>
                        <p style={{ color: "white" }}><b>{this.state.msg}</b></p>

                    </table>
                </form>

            </div>
        )
    }

}
export default ConsumerRegistrationForm;