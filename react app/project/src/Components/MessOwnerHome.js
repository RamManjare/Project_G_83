import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import mystore from "./Store";


let MessOwneHome = () => {

    let navigate = useNavigate();

    var data = JSON.parse(localStorage.getItem("messOwnerData"));
    const [mess, setData] = useState([]);
    const [show, setShow] = useState("none");
    const [messId, setId] = useState(0);

    const [logindata, setLogindata] = useState({

        date: "",
        price: "",
        menu: ""
    });

    const loadData = async () => {
        const res = await fetch("http://localhost:8080/getAllMessById?id=" + data.user_id);
        setData(await res.json());
    };


    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("messOwnerData");

        navigate('/Homepage');
    }

    var data = JSON.parse(localStorage.getItem("messOwnerData"));

    useEffect(() => { loadData() }, []);

  
    const handleInput = (ev) => {

        setLogindata((logindata) => ({
            ...logindata,
            [ev.target.name]: ev.target.value
        }));
    }
 
    const submit = (ev) => {
        ev.preventDefault();
        console.log(JSON.stringify(logindata));
        console.log(messId);

        const reqData = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({

                mess_id: messId,
                menu: logindata.menu,
                price: logindata.price,
                date: logindata.date
            })

        }
        fetch("http://localhost:8080/saveMenu", reqData)
            .then(res => res.json())
            .then(data => {

                if (data.menu_id !== undefined) {
                    alert("Succesfully Saved");
                    setShow("none");
                    navigate('/MessOwnerHome');
                    console.log(data);

                }
                else {
                    //setMsg("Unsucessfull");
                    //setColor("red");
                    alert("All Fields are mandatory");
                    console.log("ERROR");
                }

            });
    }
    const addMenu = (e) => {
        console.log("" + e.target.value);
        setShow("inline");
        setId(e.target.value);
        //console.log(messId+"---");

    }
    
    return (
        <div>
             
            <div style={{
                backgroundImage:
                    "url('./images/img1.jpg')",
                height: '120vh',
                marginTop: '-10px',
                fontSize: '15px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                {/* <img src='' height='100' width='100' /> */}

                <nav class="navbar navbar-default">
                    <ul className="nav nav-tabs">
                        <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                        <li className="nav-item"><Link className="nav-link" to="/MessOwnerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/MessOwnerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/RegisterMess" style={{ color: "blue" }}><b>Register Mess</b></Link> </li>

                        {/* <li className="nav-item"><Link className="nav-link" to="/ProvideNonVegMenu" style={{ color: "blue" }}><b>ProvideNonVegMenu Mess</b></Link> </li> */}

                        <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                    </ul>
                </nav>
                <h2 style={{ color: "red" }}>Welcome {data.name}</h2>
                <h3 style={{ color: "black" }}>Your Mess List</h3>

                <Table striped bordered hover responsive="md">
                    <thead style={{ color: "firebrick" }}>
                        <tr>
                            <td><b>Menu Name</b></td>
                            <td><b>Mess Type</b></td>
                            <td><b>Add Menu To Respective Mess</b></td>
                        </tr>
                    </thead>
                    {
                        mess.map((v) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td style={{ color: "orangered" }}>{v.mess_name}</td>
                                        <td style={{ color: "orangered" }}>{v.messType.mess_type}</td>
                                        <td><button className="btn btn-primary" value={v.mess_id} onClick={addMenu}>Add Menu</button></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
                <div style={{ display: show }}>
                    <Form style={{ width: 700, marginTop: 40, marginLeft: 400 }}>
                   
                        <Form.Group className="mb-3" controlId="formBasicText" >
                            <Form.Label><b>Menu</b></Form.Label>
                            <Form.Control type="text" name="menu" placeholder="Enter Menu Here" onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText" >
                            <Form.Label><b>Date Of Menu</b></Form.Label>
                            <Form.Control type="date" name="date" placeholder="Enter Date Here" onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label><b>Price</b></Form.Label>
                            <Form.Control type="text" name="price" placeholder="Enter Price" onChange={handleInput} />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit" onClick={submit}> Click here to submit </Button><hr />
                    </Form>
                </div>
            </div>
           

        </div>
    );
}
export default MessOwneHome;

