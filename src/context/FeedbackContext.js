import {createContext, useState} from "react"; 
import {v4 as uuidv4} from "uuid"; 
import feedbackData from "../Data/FeedbackData.js"; 
const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState(feedbackData); 
	const deleteFeedback = (id) =>{
	    if(window.confirm("Are you sure you want to delete ?")){
	      setFeedback(feedback.filter((item) => item.id !== id)); 
	    }
	}; 
	const addFeedback = (newFeedback) => {
	    newFeedback.id = uuidv4(); 
	    setFeedback([newFeedback, ...feedback]); 
	}; 
	return (<FeedbackContext.Provider value = {{feedback, deleteFeedback, addFeedback}}> {children} </FeedbackContext.Provider>);
};

export default FeedbackContext;
