import React from "react";
import './style.css';

class Aboutus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: "",
            uid: ""
        }

    }


    render() {
        return (
            <div style={{
                backgroundImage:
                    "url('./images/hero_1.jpeg')",
                height: '170vh',
                marginTop: '-70px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>


                <br /><br /><br />
                <header><h1 className="info" style={{ textDecorationLine: 'underline', textAlign: "center" }}>About Us</h1></header>
                <hr />
                <br />

                <h1 className="info" style={{ color: "Tomato", textDecorationLine: 'underline', textAlign: "center" }}> FOOD-HOME </h1>
                <br />




                <hr></hr>


            </div>
        )
    }
}

export default Aboutus;