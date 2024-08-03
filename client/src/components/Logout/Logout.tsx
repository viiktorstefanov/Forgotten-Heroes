import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/auth/authThunks";
import { RootState, AppDispatch  } from "../../state/store";
import { Navigate } from "react-router-dom";

const Logout: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user) {
      dispatch(logout(user));
    }
  }, [user, dispatch]);
 
  return <Navigate to='/'/>;
};

export default Logout;
