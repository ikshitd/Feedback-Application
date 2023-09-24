import logo from './logo.svg';
import './App.css'; 
import React, {useState} from "react"; 
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import FeedbackList from "./Components/FeedbackList";
import feedbackData from "./Data/FeedbackData.js"; 
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import {v4 as uuidv4} from "uuid"; 
import AboutPage from "./pages/AboutPage"; 
import AboutIcon from './Components/AboutIcon';
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
    <Router>
      <div> 
        <Header/> 
        <Routes>
          <Route path = '/' element = {
            <>
              <FeedbackForm handleAdd = {addFeedback}/>
              <FeedbackStats feedback = {feedback}/>
              <FeedbackList handleDelete = {deleteFeedback} feedback = {feedback}/>
              <AboutIcon />
            </>
          }/>
          <Route path = '/about' element ={<AboutPage />}/> 
        </Routes>
      </div>
    </Router>
  );
}


export default App;
