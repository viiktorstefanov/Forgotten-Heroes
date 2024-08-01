import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";


const Login: React.FC = () => {
  const { handleLogin, verifyToken } = useAuth();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      
      handleLogin(user);





    } catch (error) {
      return;
      console.error("Error during Google Sign-In: ", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
