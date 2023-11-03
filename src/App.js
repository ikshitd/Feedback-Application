import logo from './logo.svg';
import './App.css'; 
import React, {useState, useContext} from "react";
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import FeedbackList from "./Components/FeedbackList";
import feedbackData from "./Data/FeedbackData.js"; 
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import {v4 as uuidv4} from "uuid"; 
import AboutPage from "./pages/AboutPage"; 
import AboutIcon from './Components/AboutIcon';
import {FeedbackProvider} from "./context/FeedbackContext"; 
import FeedbackContext from "./context/FeedbackContext"; 
//import {motion, AnimatePresence} from "framer-motion"; 
//

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <div> 
          <Header/> 
          <Routes>  
            <Route path = '/' element = {
              <>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList />
                <AboutIcon />
              </>
            }/>
            <Route path = '/about' element ={<AboutPage />}/> 
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}


export default App;
