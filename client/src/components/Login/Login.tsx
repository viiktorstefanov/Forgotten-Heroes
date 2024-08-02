import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../../state/auth/authThunks';
import { AppDispatch, RootState } from "../../state/store";

const Login: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch<AppDispatch>();

  type FormState = {
    email: string;
    password: string;
  }
  
  const [form, setForm] = useState<FormState>({
    email: '',
    password: ''
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm: FormState) => ({ ...prevForm, [name]: value }));
  };


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  

    const data = { 
      email: form.email,
      password: form.password,
    }
    
    
    dispatch(login(data));
  };

  const onSubmitLogout = async (e: FormEvent) => {
    e.preventDefault();
    if(user) {
      dispatch(logout(user));
    }
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" value={form.email} onChange={onChange}/>
      <input type="text" name="password" value={form.password} onChange={onChange}/>
      <button type="submit">submit</button>
      <button type="button" onClick={onSubmitLogout}>logout</button>
    </form>
  );

 
};





export default Login;
