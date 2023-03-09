import { useState } from "react";
import { useNavigate } from "react-router-dom";


let MessSubscription = () => {

    let navigate = useNavigate();
    var data = JSON.parse(localStorage.getItem("loggedinusercon"));
    var messid = localStorage.getItem("getMessid");

    console.log(data.user_id);

    const [logindata, setLogindata] = useState({

        user_id: data.user_id,
        mess_id: messid,
        subscription_status_id: 15,
        start_date: "",
        end_date: ""

    });

    const [msg, setMsg] = useState("");
    const [clr, setColor] = useState("");

    const handleInput = (ev) => {

        setLogindata((logindata) => ({
            ...logindata,
            [ev.target.name]: ev.target.value
        }));

    }

    const submit = (ev) => {
        ev.preventDefault();
        console.log(JSON.stringify(logindata));

        const reqData = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({

                user_id: logindata.user_id,
                mess_id: logindata.mess_id,
                subscription_status_id: logindata.subscription_status_id,
                start_date: logindata.start_date,
                end_date: logindata.end_date
            })

        }
        fetch("http://localhost:8080/saveMessSubs", reqData)
            .then(res => res.json())
            .then(data => {

                if (data.subscription_id !== undefined) {
                    //setMsg("Succesfully Saved with user id "+data.user_id);
                    //setColor("green");
                    console.log("Succesfully Saved with user id" + data.user_id + "\n Now Login Using emailid and password");
                    navigate('/ConsumerHome');
                    //setMsg("Successfull");
                    setColor("green");
                }
                else {
                    //setMsg("Unsucessfull");
                    setColor("red");
                }

            });

    }

    return (
        <div>
            <form>
                <h1>{data.user_id}</h1>
                <table style={{ margin: "auto" }} >
                    <tr>
                        <td>Start Date </td>
                        <td><input type="date" name="start_date" onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td>End Date  </td>
                        <td><input type="date" name="end_date" onChange={handleInput} /></td>
                    </tr>

                    <td>
                        <input type="submit" value="Submit" onClick={submit} />
                    </td>

                </table>
            </form>
            <p style={{ color: clr }}>{msg}</p>
        </div>
    )
}
export default MessSubscription;