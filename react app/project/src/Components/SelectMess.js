import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

class SelectMess extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            messid: "",
            user_id: "",
            allmess: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/getAll")
            .then(res => res.json())
            .then(data => this.setState({ allmess: data }))
    }

    handleInput = (ev) => {
        const nm = ev.target.name;
        let val;

        val = ev.target.value;

        this.setState({ [nm]: val });

        this.setState({ regid: JSON.parse(localStorage.getItem("loggedinusercon")).regid })

    }

    submitForm = (ev) => {
        ev.preventDefault();
        alert("Processing.......");
        console.log(this.state);
        const reqData =
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messid: this.state.messid,
                regid: this.state.regid

            })
            //these keys will be used on server side
        }

        fetch("http://localhost:8080/selectmess", reqData)
            .then(resp => resp.json())
            .then(data => {
                if (data != 0)

                    this.setState({ msg: "Registered Successfully : " })

                else

                    this.setState({ msg: "Registration failed : " })
            })

    }

    render() {
        return (
            <div style={{
                backgroundImage:
                    "url('images/gallery_10.jpg')",
                height: '100vh',
                marginTop: '-10px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >

                <nav class="navbar navbar-default">
                    <ul className="nav nav-tabs">
                        <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/SelectMess" style={{ color: "blue" }}><b>Select Mess</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{ color: "blue" }}><b>Available Mess Details</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewMenu" style={{ color: "blue" }}><b>View Menu</b></Link> </li>

                    </ul>
                </nav>
                <br />
                <h3 className='info' > --Mess Registration-- </h3>
                <br />
                <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <table>
                        <tr>
                            <td className='info' >Select Mess : </td>
                            <td><select name="messid" onChange={this.handleInput}>
                                {
                                    this.state.allmess.map(v => {
                                        return (<option value={v.messid.messid}>{v.messname}</option>)
                                    })
                                }

                            </select> </td>

                        </tr>
                        <br />

                        <tr>
                            <td></td>
                            <td><Button bsStyle="success" type="submit" value="Register" onClick={this.submitForm} > SUBMIT</Button></td>
                        </tr>

                    </table>

                </form>
                <p className='info' style={{ color: "white" }} >(Please Ensure its one time registration on monthly basis..)</p>
                <p className='info' style={{ color: "white" }}> {this.state.msg} </p>
            </div>
        )
    }

}
export default SelectMess; 