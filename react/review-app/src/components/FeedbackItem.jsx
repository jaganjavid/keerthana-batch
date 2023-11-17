import { useState } from 'react'

const FeedbackItem = ({item}) => {

  // Component level State

//   const [rating, setRating] = useState(1);
//   const [text, setText] = useState("This is an example text");   

//   const handleClick = () => {
//     setRating((prev) => {
//         console.log(prev)
//         return prev + 1;
//     });
//   }

  return (
    <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default FeedbackItem