import { Link } from 'react-router-dom';
import './style.css';



export default function ProviderProfile() {

    return (

        <div style={{
            backgroundImage:
                "url('./images/thali.jpg')",
            height: '120vh',
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

            <br /> <br />
            <h2 className='info' style={{ color: "white" }}>-- Profile --</h2>
            <br /><br />
            <h4 className='info' style={{ color: "white" }}> Mess ID :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.messid} </h4>
            <h4 className='info' style={{ color: "white" }}> Name :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.ownername}  </h4>
            <h4 className='info' style={{ color: "white" }}> Contact No:  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.contactno} </h4>
            <h4 className='info' style={{ color: "white" }}>Id Proof :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.idproof}  </h4>
            <h4 className='info' style={{ color: "white" }}> License No :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.licenseno} </h4>

        </div>


    )

}
