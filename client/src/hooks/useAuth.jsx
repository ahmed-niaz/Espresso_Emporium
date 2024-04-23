import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseProvider";

const useAuth = () => {
  const values = useContext(AuthContext);
  return values;
};

export default useAuth;