import React, { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {


  // const [feedback, setFeedBack] = useState([
  //   {
  //     id: 1,
  //     rating:10,
  //     text: "This is a example 1"
  //   },
  //   {
  //     id: 2,
  //     rating:8,
  //     text: "This is a example 2"
  //   },
  //   {
  //     id: 3,
  //     rating:11,
  //     text: "This is a example 3"
  //   },

  // ])
  

    
  return (

    <FeedbackProvider>   
      <Header/>
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
      </div>
    </FeedbackProvider>
  )
}

export default App