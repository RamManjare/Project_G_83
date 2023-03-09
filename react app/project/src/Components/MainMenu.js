import LoginForm from './LoginForm';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Aboutus from './Aboutus';
import Contactus from './Contactus';

import Homepage from './Homepage';
import Register from './Register';
import ConsumerHome from './ConsumerHome';
import ConsumerProfile from './ConsumerProfile';
import mystore from './Store';
import React from 'react';

import AllMessInfo from './AllMessInfo';

import ViewMenu from './ViewMenu';
import ConsumerRatingsReviews from './ConsumerRatingsReviews';

import ViewRatingsReviews from './ViewRatingsReviews';

import MessRegistration from './MessRegistration';

import MyMessInfo from './mymess';
import MessSubscription from './SubscribeToMess';
import ProvideMenu from './ProvideMenu';
import ConsumerList from './ConsumerList';
import ViewFeedback from './ViewFeedback';
import MessOwneHome from './MessOwnerHome';
import MessOwnerProfile from './MessOwnerProfile';
import AdminHome from './AdminHome';
import PendingApprovals from './PendingApprovals';
import Nav from 'react-bootstrap/Nav';


class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    render() {

        mystore.subscribe(() => { 
            this.setState({ flag: mystore.getState().loggedin })
         })

        return (
            <BrowserRouter>
                <div style={{ display: this.state.flag ? 'none' : 'block' }}>

                    <nav>
                        <ul className="nav nav-tabs">
                            <li ><img src='logo.jpeg' height="40" width="40" /> </li>
                            <li className="nav-item"><Link className="nav-link" to="/Homepage" ><b>Home</b></Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/loginform" ><b>Login</b></Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/Register" ><b>Sign Up</b></Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/Contactus" ><b>Contact Us</b></Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/Aboutus" ><b>About Us</b></Link> </li>
                        </ul>
                    </nav>
                    <div>
                        <Routes>
                            <Route path="/loginform" element={<LoginForm />} />
                            <Route path="/Aboutus" element={<Aboutus />} />
                            <Route path="/Contactus" element={<Contactus />} />
                            <Route path="/Register" element={<Register />} />
                        </Routes>
                    </div>

                </div>
                <Routes>
                    <Route path="" element={<Homepage />} />
                    <Route path="/ConsumerHome" element={<ConsumerHome />} />
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/MessOwnerHome" element={<MessOwneHome />} />
                    <Route path="/ConsumerProfile" element={<ConsumerProfile />} />
                    <Route path="/AllMessInfo" element={<AllMessInfo />} />
                    <Route path="/ProvideMenu" element={<ProvideMenu />} />
                    <Route path="/ConsumerFeedback" element={<ConsumerRatingsReviews />} />
                    <Route path="/MessOwnerProfile" element={<MessOwnerProfile />} />
                    <Route path="/ViewFeedback" element={<ViewFeedback />} />
                    <Route path="/RegisterMess" element={<MessRegistration />} />
                    <Route path="/mymess" element={<MyMessInfo />} />
                    <Route path="/select" element={<MessSubscription />} />
                    <Route path="/viewmenu" element={<ViewMenu />} />
                    <Route path="/ConsumerList" element={<ConsumerList />} />
                    <Route path="/viewmenu" element={<ViewMenu />} />
                    <Route path="/AdminHome" element={<AdminHome />} />
                    <Route path="/PendingApprovals" element={<PendingApprovals />} />
                    <Route path="/feedback" element={<ConsumerRatingsReviews />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
export default MainMenu;
