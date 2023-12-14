import React, { useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackForm = () => {

  const [text, setText] = useState("");  
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const {addFeedback, feedbackEdit} = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true){
       setBtnDisabled(false);
       setText(feedbackEdit.item.text);
       setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {

    if(text === ""){
        setBtnDisabled(true);
        setMessage(null);
    }else if(text !== "" && text.trim().length <= 10){
        setBtnDisabled(true);
        setMessage("Text must be at least 10 characters");
    }else{
        setBtnDisabled(false);
        setMessage("");
    }

    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length >=  10){
       const newFeedback = {
          text,
          rating
       }

       addFeedback(newFeedback);
    }
  }

  return (
    <Card>
       <form onSubmit={handleSubmit}>
          <h2>Give your feedback</h2>

          <RatingSelect select={(rating) => setRating(rating)}/>

          <div className='input-group'>
            <input type="text" placeholder='Enter your review' value={text} onChange={handleTextChange}/>
            <Button type="submit" isDisabled={btnDisabled} version="secondary">
                Send
            </Button>

          </div>
       </form>

       <p className='message'>{message && message}</p>
    </Card>
  )
}

export default FeedbackForm