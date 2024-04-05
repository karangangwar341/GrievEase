import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../../../firebase.js'
//import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());

    data.acquisition = acquisitionChannel;

    if (data.password !== data["confirm-password"]) {
      setPasswordAreNotEqual(true);
      return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Sign up successfully");

        const userRef = collection(database, "users");
        addDoc(userRef, {
          Name: data.name,
          Email: data.email,
          phoneNumber: data.phoneNumber,
          signInType: data.role,
          UID: user.uid,
        }).then(() => {
          console.log("Document successfully written!");
        }).catch((error) => {
          console.error("Error adding document: ", error);
          alert("Error adding document");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        alert(errorMessage);
      });

    event.target.reset();
  }
  return (
    <div className="flex items-center justify-center">
    <form onSubmit={submitHandler} className="bg-white/20 bg-opacity-75 backdrop-blur-lg p-4 rounded-xl shadow-lg w-96">
      <div className="mt-2 rounded-xl">
        <label htmlFor="name" className="text-orange-900 font-medium text-sm">Name</label>
        <input id="name" type="text" name="name" required className="bg-white/30 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8" />
      </div>
      <div className="mt-2 rounded-xl">
        <label htmlFor="email" className="text-orange-900 font-medium text-sm">Email</label>
        <input id="email" type="email" name="email" required className="bg-white/30 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8" />
      </div>
      <div className="mt-2 rounded-xl">
        <label htmlFor="phone-number" className="text-orange-900 font-medium text-sm">Phone Number</label>
        <input id="phone" type="text" name="phoneNumber" required className="bg-white/30 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8" />
      </div>
      <div className="mt-2 rounded-xl">
        <label htmlFor="category" className="text-orange-900 font-medium text-sm">SignUpAs?</label>
        <select id="role" name="role" required className="bg-white/30 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8">
          <option value="Locality Member">Locality Member</option>
          <option value="Government Official">Government Official</option>
        </select>
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="rounded-xl">
          <label htmlFor="password" className="text-orange-900 font-medium text-sm">Password</label>
          <input id="password" type="password" name="password" required minLength={8} className="bg-white/30 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8" />
        </div>
        <div className="rounded-xl">
          <label htmlFor="confirm-password" className="text-orange-900 font-medium text-sm">Confirm Password</label>
          <input id="confirm-password" type="password" name="confirm-password" required className="bg-white/30 bg-opacity-75 border-b border-white text-orange-900 font-medium w-full py-1 px-2 mt-1 focus:outline-none focus:border-orange-500 text-sm rounded-md mb-2 focus:shadow-lg focus:shadow-white/50 h-8" />
          <div className="control-error mt-1">
            {passwordAreNotEqual && <p className="text-red-500 text-sm">Password Does Not Match</p>}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
  <button type="reset" className="button button-flat bg-orange-400 hover:bg-gray-600 text-orange-900 font-medium text-sm px-4 py-2 mr-2 rounded-lg focus:outline-none">Reset</button>
  <button type="submit" className="button bg-orange-500 hover:bg-orange-400 text-orange-900 font-medium text-sm px-4 py-2 rounded-lg focus:outline-none">Sign up</button>
</div>

    </form>
  </div>
  
  

  );
};

export default SignUp;
