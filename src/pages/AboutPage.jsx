import React from "react"; 
import ReactDOM from "react-dom";  
import PropTypes from "prop-types"; 
import Card from "../Components/Shared/Card";
import {Link} from "react-router-dom"; 

const AboutPage = () => {
    return (<Card> <div style = {{textAlign: "center",}}className = "about"> <h1> About This Project </h1> <p> This react-application is built for recieving feedback from customers for a particular service or a product !!</p><p> <Link to = "/"> Back to Home  </Link></p> </div></Card>); 
}; 

export default AboutPage; 