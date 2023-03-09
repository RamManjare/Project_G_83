import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";



let ViewMenu = () => {

    let navigate = useNavigate();

    var messid = localStorage.getItem("menuid");

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusermess");

        localStorage.removeItem("loggedinuservegmenu");

        navigate('/Homepage');
    }


    const [menu, setMenu] = useState([]);
    const [rate, setRating] = useState([]);
    const [clr, setColor] = useState("");

    const loadData = async () => {

        await fetch("http://localhost:8080/getMenuOfMess?id=" + messid)
            .then(res => res.json())
            .then(menudata => setMenu(menudata))
        var rt = menu.map(e => e.registeredMess);

        var end = rt.map(v => v.ratings);
        setRating(end);
        console.log(rate.map((v) => v.stars));


    }


    useEffect(() => {
        loadData()
    }, []);

    { console.log(menu) }

    return (
        <div>
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

            <h2 style={{ textAlign: "center", color: "darkgreen" }}>Our Menu</h2>
            <Table striped bordered hover responsive="md" style={{ border: "1" }}>
                <thead style={{ color: "green" }}>
                    <tr>
                        <td><b>Date</b></td>
                        <td><b>Menu Description</b></td>
                        <td><b>Mess Name</b></td>
                        <td><b>Price</b></td>
                    </tr>
                </thead>
                {
                    menu.map((v) => {
                        return (
                            <tbody>
                                <tr>
                                    <td style={{ color: "red" }}>{v.date}</td>
                                    <td style={{ color: "red" }}>{v.menu}  </td>
                                    <td style={{ color: "red" }}>{v.registeredMess.mess_name}</td>
                                    <td style={{ color: "red" }}>{v.price}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>

        </div>
    )
}
export default ViewMenu;