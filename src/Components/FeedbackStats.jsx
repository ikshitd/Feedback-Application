import React from "react"; 
import ReactDOM from "react-dom"; 
import PropTypes from "prop-types"; 

const FeedbackStats = ({feedback}) => {
    const avg = feedback.reduce((acc, current) => {
        return (acc + current.rating); 
    }, 0) / feedback.length; 

    return (<div className = "feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4> Average Rating: {isNaN(avg) ? 0: avg}</h4>
    </div>); 
}; 

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}; 

export default FeedbackStats; 