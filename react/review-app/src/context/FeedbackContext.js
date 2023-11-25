
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {


    const [feedback, setFeedBack] = useState([
        {
          id: 1,
          rating:10,
          text: "This is a example 1 Context"
        },
        {
          id: 2,
          rating:8,
          text: "This is a example 2 Context"
        },
        {
          id: 3,
          rating:11,
          text: "This is a example 3 Context"
        },
    
      ])

      const deleteFeedback = (id) => {
        if(window.confirm("Are you sure?")){
          setFeedBack(feedback.filter((item) => {
              return item.id !== id
          }))
        }
      }

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedBack([newFeedback, ...feedback]);
      }
      

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;