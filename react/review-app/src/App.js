import React, { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"

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

    
  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}

export default App