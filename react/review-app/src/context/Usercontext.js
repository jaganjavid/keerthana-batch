
import { createContext, useState } from "react";

const UserContext = createContext();


export const UserProvider = ({children}) => {


    const [user, setUser] = useState([
        {
          id: 1,
          rating:10,
          text: "This is a example 1 User"
        },
        {
          id: 2,
          rating:8,
          text: "This is a example 2 User"
        },
        {
          id: 3,
          rating:11,
          text: "This is a example 3 User"
        },
    
      ])
      

    return <UserContext.Provider value={{
        user,
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext;