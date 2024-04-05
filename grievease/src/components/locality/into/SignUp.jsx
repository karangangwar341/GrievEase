import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../../../firebase.js'
//import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState();
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
        const UserRef = collection(database, "users");
        addDoc(UserRef, {
          Name: data.name,
          Email: data.email,
          phoneNumber: data.phoneNumber,
          signInType: data.role,
          UID: user.uid,
        }).catch((error) => {
          console.error("Error adding document: ", error);
          alert("Error adding document");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        alert(errorMessage);
      });

    event.target.reset();
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
      </div>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div>
        <label htmlFor="phone-number">Phone Number</label>
        <input id="phone" type="number" name="phoneNumber" required />
      </div>
      <div className="control">
        <label htmlFor="category">SignUpAs?</label>
        <select id="role" name="role" required>
          <option value="Locality Member">Locality Member</option>
          <option value="Government Official">Government Official</option>
        </select>
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={8}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {passwordAreNotEqual && <p>Password Does Not Match</p>}
          </div>
        </div>
      </div>
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
};

export default SignUp;
