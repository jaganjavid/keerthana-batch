import React from 'react'

const FeedbackStats = ({feedback}) => {

  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0)  / feedback.length; 


  return (
    <div className='feedback-stats'>
       <h4>Total Feedback {feedback.length}</h4>
       <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
    </div>
  )
}


export default FeedbackStats