
import { createContext, useEffect, useState } from "react";
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

      const [feedbackEdit, setFeedbackEdit] =  useState({
        item:{},
        edit: false
      })

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedBack([newFeedback, ...feedback]);
      }

      const deleteFeedback = (id) => {
        if(window.confirm("Are you sure?")){
          setFeedBack(feedback.filter((item) => {
              return item.id !== id
          }))
        }
      }

      const editFeedback = (item) => {
         setFeedbackEdit({
          item: item,
          edit: true
         })
      }

      
      

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;