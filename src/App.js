import logo from './logo.svg';
import './App.css'; 
import React, {useState} from "react"; 
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import feedbackData from "./Data/FeedbackData.js"; 
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import {v4 as uuidv4} from "uuid"; 
// import {motion, AnimatePresence} from "framer-motion"; 

const  App = () => {
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
  return (
    <div> 
	    <Header/> 
      <FeedbackForm handleAdd = {addFeedback}/>
      <FeedbackStats feedback = {feedback}/>
	    <FeedbackList handleDelete = {deleteFeedback} feedback = {feedback}/>
    </div>
  );
}


export default App;
