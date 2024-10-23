import { useRef } from "react";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

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
    </div>
  );
}
