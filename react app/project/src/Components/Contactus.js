import React from "react";
import './style.css';


class Contactus extends React.Component {


    render() {
        return (
            <div style={{
                backgroundImage:
                    "url('./images/contactus.jpg')",
                height: '120vh',
                marginTop: '-50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br /> <br />
                <header><h1 className="info" style={{ textDecorationLine: 'underline' }}>Contact Us</h1></header>
                <hr />
                {/*<h1 style={{color:"Tomato",textDecorationLine: 'underline'}}> Foodies Hunt </h1>*/}
                <h2 className="info">--Email Address--<br /><a href="satavsagar17@gmail.com">satavsagar17@gmail.com</a></h2>
                <h2 className="info"><a href="rammanjare@gmail.com">rammanjare@gmail.com</a></h2><br />
                <h3 className="info">--Address--</h3>

                <h4 className="info">Pune <br />
                    Maharashtra  <br />
                    Pune: 410507 Maharashtra, INDIA</h4>
                <h3 className="info" style={{ color: "blue", textDecorationLine: 'underline' }}>For any kind of queries related to this sytem do visit to our office location.</h3>

                <h3 className="info" >--Contact no--</h3>
                <p className="info" ><b>Sagar Satav - 9552177430.</b></p>
                <p className="info" ><b>Ram Manjare - 8482816611.</b></p>
                <p className="info" ><b> - 9860212702.</b></p>

                <footer><h3></h3></footer>
                <br /><br />
                <br />
                <hr></hr>

            </div>
        )
    }
}

export default Contactus;