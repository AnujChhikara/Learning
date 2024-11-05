import { useContext, useRef } from "react";
import { ThemeContext } from "../Layouts/Home";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { isDark } = useContext(ThemeContext);

  const handleSubmittion = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);
  };
  return (
    <div>
      <h2>SingUp</h2>
      <input ref={nameRef} type='text' placeholder='Name' />
      <input ref={emailRef} type='text' placeholder='Email' />
      <input ref={passwordRef} type='password' placeholder='Password' />
      <button onClick={handleSubmittion}>Sign Up</button>
      {isDark ? "Theme is Dark" : "Theme is light"}
    </div>
  );
}
