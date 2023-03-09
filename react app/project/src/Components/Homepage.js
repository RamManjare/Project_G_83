import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/food-india-indian-wallpaper-preview_800x400.jpg";
import image2 from "../images/gettyimages-1212329362-612x612_800x400.jpg";
import image3 from "../images/pexels-chan-walrus-958545_800x400.jpg";
class Homepage extends Component {


  render() {
    const myStyle = {
      backgroundImage:
        "url('images/HomePageImage.jpg')",
      height: '180vh',
      marginTop: '-50px',
      fontSize: '20px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div className='img1'>

        {/* <img src='240_F_355890712_3SMOfEwwpmSFTX85jvp26txdUXRkgxEZ.jpg' height="400px" width="600px" /> */}
        {/* <br/> <br/> */}

        {/* <img src='logo.jpeg' height="80" width="80" /> */}
        <div>
          <Carousel interval={1500}>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" style={{ height: "390px" }} />
              <Carousel.Caption>
                {/* <h3>Subcription 1</h3>
                <p>Weight Loss Plan</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" style={{ height: "390px" }} />
              <Carousel.Caption>
                {/* <h3>Subcription 2</h3>
                <p>Protein Meals</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" style={{ height: "390px" }} />
              <Carousel.Caption>
                {/* <h3>Subcription 3</h3>
                <p>Signature Salads</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br /><br />
        {/* <img src='logo.jpeg' height="100" width="100" /> */}
        <h1 className='info' style={{ textAlign: "center", color: "darkblue" }}> <img src='logo.jpeg' height="70" width="80" /> WELCOME TO THE <img src='logo.jpeg' height="70" width="80" /> <br />FOOD-HOME</h1>


        <br /><br />



      </div>
    );
  }
}

export default Homepage;