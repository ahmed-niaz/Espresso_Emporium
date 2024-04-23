import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.config";


export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
     const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true)

     const createUser = (email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
     }
    
  const information = {user,setUser,createUser,loading};

  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseProvider;
