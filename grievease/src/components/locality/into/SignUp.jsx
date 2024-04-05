import { useState } from "react";
const SignUp = () => {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState();
  function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    // const enteredEmail=fd.get('email')
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());

    data.acquisition = acquisitionChannel;
    if (data.password != data["confirm-password"]) {
      setPasswordAreNotEqual(true);
      return;
    }
    console.log(data);

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
