import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import mystore from "./Store";

export default function ProvideMenu() {

    let navigate = useNavigate();

    var data = JSON.parse(localStorage.getItem("messOwnerData"));

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("messOwnerData");

        navigate('/Homepage');
    }


    const [mess, setData] = useState([]);

    const loadData = async () => {
        const res = await fetch("http://localhost:8080/getMenuById?id=" + data.user_id);
        setData(await res.json());
    };
    useEffect(() => { loadData() }, []);

    const [logindata, setLogindata] = useState({

        date: "",
        price: "",
        menu: ""
    });

    const handleInput = (ev) => {

        setLogindata((logindata) => ({
            ...logindata,
            [ev.target.name]: ev.target.value
        }));
    }
    console.log(data.mess_id);
    const submit = (ev) => {
        ev.preventDefault();
        console.log(JSON.stringify(logindata));

        const reqData = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({

                mess_id: 1001,
                menu: logindata.menu,
                price: logindata.price,
                date: logindata.date
            })

        }
        fetch("http://localhost:8080/saveMenu", reqData)
            .then(res => res.json())
            .then(data => {

                if (data.menu_id !== undefined) {
                    alert("Succesfully Saved \n Redirecting To Home Page");
                    //navigate('/ProvideMenu');
                    window.location.reload(false);
                    console.log(data);
                    setShow("none");
                }
                else {
                    //setMsg("Unsucessfull");
                    //setColor("red");
                    console.log("ERROR");
                }

            });
    }

    const [flag, setFlag] = useState(false);
    const [show, setShow] = useState("none");
    const [messId, setId] = useState(0);
    const check = (e) => {
        console.log("" + e.target.value);
        setShow("inline");
        setId(e.target.value);
        //console.log(messId+"---");

    }

    const remove = (v) => {
        console.log("calling server API" + v.target.value)
        fetch("http://localhost:8080/deleteMenu?id=" + v.target.value)
            .then(resp => resp.json())
            .then(out => {
                setFlag(out);

                console.log(flag.length + "-------------");

                if (flag !== undefined) {
                    alert("Succesfully Removed");
                    console.log("Success");
                    //navigate('/MessOwnerHome');
                    window.location.reload(false);
                }
            })


    }

    //  console.log(flag+"Here");

    return (
        <div style={{
            backgroundImage:
                "url('./images/thali.jpg')",
            height: '130vh',
            marginTop: '-10px',
            fontSize: '15px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <nav class="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/RegisterMess" style={{ color: "blue" }}><b>Register Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
                <br /> <br />
            </nav>

            <h3 style={{ color: "green" }}>-- All Consumer List --</h3>
            <br /><br />
            <Table striped bordered hover responsive="md">
                <thead style={{ color: "green" }}>
                    <tr>
                        <td><b>Menu ID</b></td>
                        <td><b>Mess Name</b></td>
                        <td><b>Menu</b></td>
                        <td><b>Date</b></td>
                        <td><b>Price</b></td>
                        <td><b>Add Menu</b></td>
                        <td><b>Delete Menu</b></td>
                    </tr>
                </thead>

                {
                    mess.map((v) => {
                        return (
                            <tbody>
                                <tr>
                                    <td style={{ color: "red" }}>{v.menu_id}</td>
                                    <td style={{ color: "red" }}>{v.registeredMess.mess_name}</td>
                                    <td style={{ color: "red" }}>{v.menu}</td>
                                    <td style={{ color: "red" }}>{v.date}</td>
                                    <td style={{ color: "red" }}>{v.price}</td>
                                    <td><button className="btn btn-primary" value={v.mess_id} onClick={check}>Add Menu</button> </td>
                                    <td><button className="btn btn-danger" value={v.menu_id} onClick={remove}>Remove Menu</button> </td>

                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
            <form style={{ display: show }}>
                <table style={{ margin: "auto" }} >
                    <tr>
                        <td>Menu </td>
                        <td><input type="text" name="menu" onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td><input type="date" name="date" onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type="number" name="price" onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Submit" onClick={submit} />
                        </td>
                    </tr>
                </table>
            </form>

        </div>
    )

}