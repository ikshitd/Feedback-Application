import {createContext, useState, useEffect} from "react"; 
import {v4 as uuidv4} from "uuid"; 
import feedbackData from "../Data/FeedbackData.js"; 
import { useFetcher } from "react-router-dom";
const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children}) => {
	const [text, setText] = useState("");
	const [feedback, setFeedback] = useState(feedbackData); 
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {}, 
		edit: false, 
	});  

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const response = await fetch(`http://localhost:5000/feedback?_order=desc`); 
		const data = await response.json(); 
		setFeedback(data);
	}; 
	
	const updateFeedback = async (id, updateItem) => {
		const response = await fetch(`http://localhost:5000/feedback/${id}`, {
			method: "PUT", 
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateItem)
		}); 
		const data = await response.json(); 
		setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item)); 
		setText(""); 
	}; 
	// delete feedback
	const deleteFeedback = async (id) =>{
	    if(window.confirm("Are you sure you want to delete ?")) { 
			await fetch(`http://localhost:5000/feedback/${id}`, {method: "DELETE"})
	    	setFeedback(feedback.filter((item) => item.id !== id)); 
	    }
	}; 
	//add feedback 
	const addFeedback =  async (newFeedback) => {
		const response = await fetch("http://localhost:5000/feedback", {
			method: "POST", 
			headers: {
				'Content-Type': 'application/json'
			}, 
			body: (JSON.stringify(newFeedback))
		}); 

		const data = await response.json(); 
	    newFeedback.id = uuidv4(); 
	    setFeedback([data, ...feedback]);
		setText("");  
	}; 
	// edit feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item: item, 
			edit: true, 
		}); 
	};  
	return (<FeedbackContext.Provider value = {{text, setText, feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback}}> {children} </FeedbackContext.Provider>);
}

export default FeedbackContext;
