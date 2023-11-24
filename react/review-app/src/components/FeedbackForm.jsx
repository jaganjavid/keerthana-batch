import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';


const FeedbackForm = () => {

  const [text, setText] = useState("");  
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
       <form>
          <h2>Give your feedback</h2>

          <RatingSelect/>

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