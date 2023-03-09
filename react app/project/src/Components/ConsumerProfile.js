import { Link, useNavigate } from 'react-router-dom';
import ConsumerHome from './ConsumerHome';
import './style.css';
import mystore from './Store';


export default function ConsumerProfile() {
    let navigate = useNavigate();

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusercon");

        navigate('/Homepage');
    }

    return (

        <div style={{
            backgroundImage:
                "url('images/gallery_10.jpg')",
            height: '100vh',
            marginTop: '-10px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            textAlign: "center"
        }}>

            <nav className="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{ color: "blue" }}><b>Available Mess Details</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/mymess" ><b>Registered Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>
            <br /><br />

            <h2 className='info' style={{ color: "red" }}><b><u>Profile</u></b></h2>
            <br />
            <h4 className='info' style={{ color: "red", textAlign: 'center' }} > Registration ID :  {JSON.parse(localStorage.getItem("loggedinusercon")).user_id} </h4>
            <h4 className='info' style={{ color: "red", textAlign: 'center' }}>   Name :  {JSON.parse(localStorage.getItem("loggedinusercon")).name} </h4>
            <h4 className='info' style={{ color: "red", textAlign: 'center' }}> City :  {JSON.parse(localStorage.getItem("loggedinusercon")).address} </h4>
            <h4 className='info' style={{ color: "red", textAlign: 'center' }}>  Mail Id :  {JSON.parse(localStorage.getItem("loggedinusercon")).email_id} </h4>

        </div>


    )

}
