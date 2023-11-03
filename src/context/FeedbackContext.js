import {createContext, useState} from "react"; 
import {v4 as uuidv4} from "uuid"; 
import feedbackData from "../Data/FeedbackData.js"; 
const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState(feedbackData); 
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {}, 
		edit: false, 
	});  
	
	const updateFeedback = (id, updateItem) => {
		setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem} : item)); 
	}; 
	// delete feedback
	const deleteFeedback = (id) =>{
	    if(window.confirm("Are you sure you want to delete ?")){
	      setFeedback(feedback.filter((item) => item.id !== id)); 
	    }
	}; 
	//add feedback 
	const addFeedback = (newFeedback) => {
	    newFeedback.id = uuidv4(); 
	    setFeedback([newFeedback, ...feedback]); 
	}; 
	// edit feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item: item, 
			edit: true, 
		}); 
	};  
	return (<FeedbackContext.Provider value = {{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback}}> {children} </FeedbackContext.Provider>);
} 

const FeedbackForm = () => {
    const [text, setText] = useState(""); 
    const [rating, setRating] = useState(10); 
    const [btnDisabled, setBtnDisbaled] = useState(true); 
	}; 
};

export default FeedbackContext;
