import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
/*
class ConsumerHome extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return ( 
                        <div>
                            <h1>Welcome </h1>
                     <h2> Hello {JSON.parse(localStorage.getItem("loggedinuser")).consumername} </h2>
                    
                     </div>
        )
    }
}

export default ConsumerHome; */

class ProvideNonVegMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            messid: "",
            day: "",
            menustatus: "",
            curry: "",
            fry: "",
            breadtype: "",
            rice: "",
            colddrink: "",
            msg: ""

        }
    }

    handleInput = (ev) => {
        const nm = ev.target.name;
        let val;

        val = ev.target.value;

        this.setState({ [nm]: val });

        this.setState({ messid: JSON.parse(localStorage.getItem("loggedinusermess")).messid.messid })

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
                day: this.state.day,
                menustatus: this.state.menustatus,
                fry: this.state.fry,
                breadtype: this.state.breadtype,
                colddrink: this.state.colddrink,
                curry: this.state.curry,
                rice: this.state.rice
            })
            //these keys will be used on server side
        }
        let flag = false;

        if (this.state.day != "" && this.state.menustatus != "" && this.state.fry != "" && this.state.breadtype != ""
            && this.state.colddrink != "" && this.state.curry != "" && this.state.rice != "") { flag = true; }
        console.log(flag);

        if (flag === true) {
            fetch("http://localhost:8080/addnonvegmenu", reqData)
                .then(resp => resp.json())
                .then(data => {
                    if (data != 0)

                        this.setState({ msg: "Added Successfully " })

                    else

                        this.setState({ msg: " Failed  " })
                })
        }
        else {
            this.setState({ msg: " Basic Fields are required " })
        }

    }
    render() {
        return (
            <div className='info' style={{
                backgroundImage:
                    "url('./images/image1.png')",
                height: '120vh',
                marginTop: '-10px',
                fontSize: '15px',
                backgroundSize: 'cover',
                textAlign: "center"
            }}>

                <nav class="navbar navbar-default">
                    <ul className="nav nav-tabs">

                        <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProviderHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProviderProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                    </ul>
                </nav>

                <div class="container mt-6">
                    <h2 style={{ color: "whitesmoke" }}>Non Veg Menu</h2>
                    <h4 style={{ color: "blue" }}>Select Your Menu</h4>
                    <form action="/action_page.php">
                        <div>
                            <b>  <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}>Select Day:</label></b>
                            <select class="form-select" id="day" name="day" onChange={this.handleInput}>
                                <option>Choose--</option>
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                                <option>Saturday</option>
                                <option>Sunday</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>Select Status:</b></label>
                            <select class="form-select" id="status" name="menustatus" onChange={this.handleInput}>
                                <option>Choose--</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>Select Curry:</b></label>
                            <input type="text" list="curry" name="curry" onChange={this.handleInput} />
                            <datalist class="form-select" id="curry" name="curry" hidden="true">
                                <option>Choose--</option>
                                <option>Chicken Tikka</option>
                                <option>Chiken Khima</option>
                                <option>Chiken Kolhapuri</option>
                                <option>Malvani</option>
                                <option>Mutton Curry</option>
                                <option>Fish Curry</option>

                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>Select Bread Type:</b></label>
                            <input type="text" list="breadtype" name="breadtype" onChange={this.handleInput} />
                            <datalist class="form-select" id="breadtype" name="breadtype" hidden="true">
                                <option>Choose--</option>
                                <option>Chapati</option>
                                <option>Roti</option>
                                <option>Jawari Bhakri</option>
                                <option>Bajari Bhakri</option>
                                <option>Butter Nan</option>
                                <option>Fulke</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>Select Fry:</b></label>
                            <input type="text" list="fry" name="fry" onChange={this.handleInput} />
                            <datalist class="form-select" id="fry" name="fry" hidden="true">
                                <option>Choose--</option>
                                <option>Chiken Fry</option>
                                <option>Chicken 65</option>
                                <option>Tandoori Chicken</option>
                                <option>cuttlet</option>
                                <option>Fish Fry</option>
                                <option>Chicken Lollipop</option>

                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>Select Rice Type:</b></label>
                            <input type="text" list="rice" name="rice" onChange={this.handleInput} />
                            <datalist class="form-select" id="rice" name="rice" hidden="true">
                                <option>Choose--</option>
                                <option>Jeera Rice</option>
                                <option>Biryani</option>
                                <option>Egg-rice</option>
                                <option>Dum-biryani</option>
                                <option>Plain rice</option>
                                <option>Fried Rice</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>Select Cold Drinks:</b></label>
                            <input type="text" list="colddrink" name="colddrink" onChange={this.handleInput} />
                            <datalist class="form-select" id="colddrink" name="colddrink" hidden="true">
                                <option>Choose--</option>
                                <option>Sprite</option>
                                <option>Slice</option>
                                <option>Mountain Dew</option>
                                <option>Coke</option>
                                <option>Masala Tak</option>
                                <option>Pepsi</option>
                            </datalist>
                        </div>
                        <br />




                        {/*  <div>
                <label for="sel1" class="form-label">Select Price:</label>
                <input type="text" list="price"  name="price"/>
                <datalist class="form-select" id="price" name="price" hidden="true">
                <option>Choose--</option>
                <option>Rs.50</option>
                <option>Rs.70</option>
                <option>Rs.100</option>
                <option>Rs.120</option>
                </datalist>
                </div>
    <br/>*/}

                        <Button bsStyle="success" type="button" onClick={this.submitForm} >Submit</Button>
                    </form>
                </div>

                <p>{this.state.msg}</p>
            </div>




        )
    }
} export default ProvideNonVegMenu; 