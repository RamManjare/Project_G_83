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

class ProvideVegMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            messid: "",
            day: "",
            menustatus: "",
            curry1: "",
            curry2: "",
            breadtype: "",
            sweetdish: "",
            starter: "",
            rice: "",
            colddrink: "",
            thalitype: "",
            specialdish: "",
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
                breadtype: this.state.breadtype,
                colddrink: this.state.colddrink,
                curry1: this.state.curry1,
                curry2: this.state.curry2,
                specialdish: this.state.specialdish,
                starter: this.state.starter,
                sweetdish: this.state.sweetdish,
                thalitype: this.state.thalitype,
                rice: this.state.rice
            })
            //these keys will be used on server side
        }
        let flag = false;

        if (this.state.day != "" && this.state.menustatus != "" && this.state.breadtype != "" && this.state.curry1 != ""
            && this.state.curry2 != "" && this.state.thalitype != "" && this.state.rice != "" && this.state.starter != ""
            && this.state.specialdish != "" && this.state.colddrink != "" && this.state.sweetdish != "") { flag = true; }
        console.log(flag);
        if (flag === true) {
            fetch("http://localhost:8080/addvegmenu", reqData)
                .then(resp => resp.json())
                .then(data => {
                    if (data != 0)

                        this.setState({ msg: "Added Successfully " })

                    else

                        this.setState({ msg: "Failed " })
                })
        }
        else {
            this.setState({ msg: " Basic feilds are required " })
        }

    }
    render() {
        return (
            <div className='info' style={{
                backgroundImage:
                    "url('./images/thali.jpg')",
                height: '180vh',
                marginTop: '-10px',
                fontSize: '15px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
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

                    <h2 style={{ color: "whitesmoke" }}> Veg Menu</h2>
                    <h4 style={{ color: "blue" }}> Select Your Menu </h4>


                    <form action="/action_page.php">
                        <p style={{ color: "red" }}><b>( * ) fields are compulsory</b></p>
                        <p ><b>(If item not available please enter 'None')</b></p>
                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select Day:</b></label>
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
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select Status:</b></label>
                            <select class="form-select" id="status" name="menustatus" onChange={this.handleInput}>
                                <option>Choose--</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Curry 1:</b></label>
                            <input type="text" list="curry1" name="curry1" onChange={this.handleInput} />
                            <datalist class="form-select" id="curry1" name="curry1" hidden="true">
                                <option>Choose--</option>
                                <option>Panner Masala</option>
                                <option>Bhedi Fry</option>
                                <option>Mix Veg</option>
                                <option>Palak Panner</option>
                                <option>Aaloo Subji</option>
                                <option>Greenpease</option>

                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Curry 2:</b></label>
                            <input type="text" list="curry2" name="curry2" onChange={this.handleInput} />
                            <datalist class="form-select" id="curry2" name="curry2" hidden="true">
                                <option>Choose--</option>
                                <option>Dal Fry</option>
                                <option>Matki Usal</option>
                                <option>Masala Vangi</option>
                                <option>Kadhi </option>
                                <option>Methi</option>
                                <option>Kaju Curry</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Sweet Dish:</b></label>
                            <input type="text" list="sweetdish" name="sweetdish" onChange={this.handleInput} />
                            <datalist class="form-select" id="sweetdish" name="sweetdish" hidden="true">
                                <option>Choose--</option>
                                <option>Kheer</option>
                                <option>Shrikhand</option>
                                <option>Gulab Jamun</option>
                                <option>Sheera</option>
                                <option>Jalebi</option>
                                <option>Rabdi</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Bread Type:</b></label>
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
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Starter:</b></label>
                            <input type="text" list="starter" name="starter" onChange={this.handleInput} />
                            <datalist class="form-select" id="starter" name="starter" hidden="true">
                                <option>Choose--</option>
                                <option>Masal Papad</option>
                                <option>Tomato Soup</option>
                                <option>Salad</option>
                                <option>Chips</option>
                                <option>Soyabian Chilli</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Rice Type:</b></label>
                            <input type="text" list="rice" name="rice" onChange={this.handleInput} />
                            <datalist class="form-select" id="rice" name="rice" hidden="true">
                                <option>Choose--</option>
                                <option>Jeera Rice</option>
                                <option>Khichadi</option>
                                <option>Dal-Rice</option>
                                <option>Veg-Pulav</option>
                                <option>Plain Rice</option>
                                <option>Fried Rice</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Cold Drinks:</b></label>
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

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Special Dish:</b></label>
                            <input type="text" list="specialdish" name="specialdish" onChange={this.handleInput} />
                            <datalist class="form-select" id="specialdish" name="specialdish" hidden="true">
                                <option>Choose--</option>
                                <option>Puran Poli</option>
                                <option>Thalipeet-dahi</option>
                                <option>Puri Bhaji</option>
                                <option>Misal Pav</option>
                                <option>Pav Bhaji</option>
                                <option>Veg-Biryani</option>
                            </datalist>
                        </div>
                        <br />

                        <div>
                            <label for="sel1" class="form-label" style={{ color: "whitesmoke" }}><b>* Select/Enter Thali Type:</b></label>
                            <input type="text" list="thalitype" name="thalitype" onChange={this.handleInput} />
                            <datalist class="form-select" id="thalitype" name="thalitype" hidden="true">
                                <option>Choose--</option>
                                <option>Maharastrian</option>
                                <option>Punjabi</option>
                                <option>South-Indian</option>
                                <option>Gujrati</option>
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

                    <p style={{ color: "whitesmoke" }}><b>{this.state.msg}</b></p>

                </div>


            </div>




        )
    }
} export default ProvideVegMenu;