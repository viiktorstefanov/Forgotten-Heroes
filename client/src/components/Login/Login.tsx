import React from "react";

const Login: React.FC = () => {
 
  return (
    <form>
      <input type="text" name="email"/>
      <input type="text" name="password" />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
