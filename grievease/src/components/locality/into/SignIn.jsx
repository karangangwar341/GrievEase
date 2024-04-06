import { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase.js'
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    signInWithEmailAndPassword(auth, enteredValues.email, enteredValues.password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Signin successfully');
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }
  return (
    <div className="flex items-center justify-center text-orange-900">
    <form onSubmit={handleSubmit} className="bg-white/20 bg-opacity-75 backdrop-blur-lg p-4 rounded-xl shadow-lg w-96">
      <h2 className="text-center text-orange-900 text-3xl font-medium mb-4">Login</h2>
      <div className="control-row">
        <div className="control no-margin rounded-xl">
          <label htmlFor="email" className="text-orange-900 font-medium text-sm">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            required
            className="bg-white/70 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8"
          />
        </div>
        <div className="control no-margin rounded-xl">
          <label htmlFor="password" className="text-orange-900 font-medium text-sm">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={enteredValues.password}
            required
            className="bg-white/70 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8"
          />
        </div>
      </div>
      <section className="flex flex-row gap-1">
      <h2 className="text-sm ">
        didn't have account?
      </h2>
      <a className="button button-flat hover:bg-orange-200 text-orange-900 font-medium text-sm px-2  mr-1 rounded-lg focus:outline-none" href="#">signup</a>
      </section>

      <p className="form-actions flex justify-center mt-6">
        <button className="button button-flat bg-orange-400 hover:bg-orange-200 text-orange-900 font-medium text-sm px-4 py-2 mr-2 rounded-lg focus:outline-none" type="reset">Reset</button>
        <button className="button bg-orange-500 hover:bg-orange-400 text-orange-900 font-medium text-sm px-4 py-2 rounded-lg focus:outline-none" type="submit">Login</button>
      </p>
    </form>
  </div>
  
  );
}
