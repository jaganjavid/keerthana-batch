import React, { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"


const App = () => {


  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      rating:10,
      text: "This is a example 1"
    },
    {
      id: 2,
      rating:8,
      text: "This is a example 2"
    },
    {
      id: 3,
      rating:11,
      text: "This is a example 3"
    },

  ])



  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure?")){
      setFeedBack(feedback.filter((item) => {
          return item.id !== id
      }))
    }
  }

    
  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App