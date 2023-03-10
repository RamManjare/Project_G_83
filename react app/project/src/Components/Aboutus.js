import React from "react";
import './style.css';
import image from '../images/08cc6e104723621.5f698671656dc.png';
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
                <br></br>
                     {/* <img src={image} height="40%" width="90%"  /> */}
                <h4  className="info" style={{ color: "Black", textAlign: "center" }}> <img src={image} height="400px" width="100%"  /><br></br>   
      </h4>
                <br />




         


            </div>
        )
    }
}

export default Aboutus;