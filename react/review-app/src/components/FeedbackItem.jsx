import PropTypes from "prop-types";
import Card from "./shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({item}) => {

  // const handleClick = (id) => console.log(id);
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
 


  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="red"/>
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="#202142"/>
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem