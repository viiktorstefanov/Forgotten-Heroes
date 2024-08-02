import React from "react";

const Register: React.FC = () => {
 
  return (
    <form>
      <input type="text" name="email"/>
      <input type="text" name="password" />
      <input type="text" name="firstName" />
      <button type="submit">submit</button>
    </form>
  );
};

export default Register;
