import React, {useState, useContext} from "react"; 
import Card from "./Shared/Card"; 
import PropTypes from "prop-types"; 
import {FaTimes, FaEdit} from "react-icons/fa"; // font awesome
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}) {
	const {feedback, deleteFeedback} = useContext(FeedbackContext); 
	return (
	<Card reverse = {true}>
		<div className = "num-display"> {item.rating} </div>
		<button onClick = {() => {deleteFeedback(item.id)}} className = "close"> <FaTimes color = "purple"/> </button>
		<button class = "edit"> <FaEdit /> </button> 
		<div className = "text-display"> {item.text} </div> 
	</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired, 
}; 
export default FeedbackItem;