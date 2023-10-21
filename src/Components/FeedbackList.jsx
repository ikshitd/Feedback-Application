import React, {useContext} from 'react'; 
import FeedbackItem from "./FeedbackItem"; 
//import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext"; 

function FeedbackList() {
	const {feedback, deleteFeedback} = useContext(FeedbackContext); 
	if(!feedback || feedback.length === 0) {
		return (<p style = {{textAlign: "center"}}> No feedback yet !!</p>); 
	}
	return (<div className = "feedback-list"> {
		feedback.map((item) => (
			<FeedbackItem key = {item.id} item = {item} handleDelete = {deleteFeedback}/>
		))
	}
	</div>); 
}

// FeedbackList.propTypes = {
// 	feedback: PropTypes.arrayOf(
// 		PropTypes.shape(
// 			{
// 				id: PropTypes.number.isRequired, 
// 				rating: PropTypes.number.isRequired, 
// 				text: PropTypes.string.isRequired, 
// 			}
// 		)
// 	)
// }; 

export default FeedbackList;
