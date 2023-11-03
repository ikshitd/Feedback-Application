import React, {useState, useContext, useEffect} from "react";
import ReactDOM from "react-dom"; 
import PropTypes from "prop-types"; 
import Card from './Shared/Card'; 
import Button from "./Shared/Button"; 
import RatingSelect from "./RatingSelect"; 
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
    const [text, setText] = useState("");  
    const [rating, setRating] = useState(10); 
    const [btnDisabled, setBtnDisabled] = useState(true); 
    const [message, setMessage] = useState("");
    const {feedback, addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext); 
    
    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text); 
            setRating(feedbackEdit.item.rating); 
        }
    }, [feedbackEdit]); 
    
    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true); 
            setMessage(null); 
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage("Text must be atleast 10 characters !!");
        } else{
            setMessage(null); 
            setBtnDisabled(false);  
        }
        setText(e.target.value);
    }; 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // to prevent it from submitting to the original file
        if(text.trim().length > 10) {
            const newFeedback = {
                text: text, 
                rating: rating, 
            }; 
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback); 
            } else {
                addFeedback(newFeedback); 
                setText(''); 
            }
        }
    }; 
    return (
    <Card reverse = {true}>
        <form onSubmit = {handleSubmit}>
            <h2> How would you rate our service?</h2>
            {/* rating select component */}
            <RatingSelect select = {(rating) => {setRating(rating)}}/>
            <div className = "input-group">
                <input style = {{margin: "1px", borderRadius: "8px", backgroundColor: "#d9d9d9", color: "black"}} onChange = {handleTextChange} type = "text" placeholder = "Enter your review here..." value = {text}/> 
                <Button type = "submit" isDisabled = {btnDisabled}> Submit </Button>
            </div>
            {message && <div className = "message"> {message} </div>}
        </form>
    </Card>);
}; 
export default FeedbackForm;
