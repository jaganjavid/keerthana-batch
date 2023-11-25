
import FeedbackItem from "./FeedbackItem"

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackList = () => {

   const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet Added</p>
    }

   
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayof(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired
//     })
//   )
// }

export default FeedbackList