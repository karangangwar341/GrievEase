import { Component } from "react";
import "./Form.css";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { auth, database } from "../../../firebase";
const GrievancesRef = collection(database, "grievances");
class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      street: "",
      locality: "",
      city: "",
      state: "",
      description: "",
      selectedOption: "Miscellaneous",
      countryCode: "+91",
      phoneNumber: "",
      image: "",
      Upvotes: 0,
      timestamp: "",
      status: "pending",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleImageChange = (e) => {
    // this.setState({ image: e.target.value });
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        this.setState({ image: base64String });
      };

      reader.readAsDataURL(file);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state);
    try {
      await addDoc(GrievancesRef, {
        name: this.state.firstName + " " + this.state.lastName,
        street: this.state.street,
        locality: this.state.locality,
        city: this.state.city,
        state: this.state.state,
        department: this.state.selectedOption,
        description: this.state.description,
        phoneNumber: this.state.countryCode + this.state.phoneNumber,
        // uid: auth.currentUser.uid,
        Upvotes: 0,
        title:this.state.title,
        timestamp: serverTimestamp(),
        image: this.state.image,
        status: "pending",
      });
      alert("Form submitted successfully");
      window.location.reload();
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="name-container">
            <div className="input-container">
              <label>
                First Name:
                <input
                  className="bg-white"
                  required
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Last Name:
                <input
                  required
                  className="inp"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
          </div>

          <br />

          <label>
            Complete Address
            <input
              required
              type="text"
              name="street"
              placeholder="street"
              value={this.state.street}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            <input
              required
              type="text"
              name="locality"
              placeholder="locality"
              value={this.state.locality}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            <input
              required
              placeholder="city"
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            <input
              required
              type="text"
              name="state"
              placeholder="state"
              value={this.state.state}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Title for Grievance:
            <input
              required
              name="title"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Describe Your Case:
            <textarea
              required
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Please describe your case..."
            />
          </label>
          <br />

          <label>
            Choose an Option:
            <select
              required
              name="selectedOption"
              value={this.state.selectedOption}
              onChange={this.handleSelectChange}
            >
              <option value="Miscellaneous">Choose The Department</option>
              <option value="Water-Works">Water Works</option>
              <option value="Electricity">Electricity</option>
              <option value="RoadWays">RoadWays</option>
              <option value="Law-Enforcement">Law-Enforcement</option>
              <option value="Waste">Waste</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </label>
          <br />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <div className="phone-input-container">
            <input
              required
              type="tel"
              id="countryCode"
              name="countryCode"
              value={this.state.countryCode}
              onChange={this.handleInputChange}
              placeholder="+91"
              className="country-code-input"
            />
            <input
              required
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              placeholder="Enter your mobile number"
              className="phone-input"
            />
          </div>

          <br />

          <label>
            Upload an Image:
            <div className="file-upload-container">
              <input
                required
                placeholder="Enter the Gdrive link of image"
                type="file"
                accept="image/*"
                onChange={this.handleImageChange}
                name="image"
              />
            </div>
          </label>

          <br />

          <div className="button-container">
            <button type="submit" className="Gbutton">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormComponent;
