import React from "react";
import { useState } from "react";
import Button from "./Button";
import avatar from "../images/avatar.png";
import Icon from "./Icons";

const CreateContact = () => {
  //const [photo, setPhoto] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="create-contact hidden" onSubmit={onSubmit}>
      <div className="create-contact__photo">
        <label>Photo</label>
        <img src={avatar} alt="Profile Photo" />
        <div className="create-contact__container">
          <button className="btn btn--white">Change</button>
          <div className="dropdown">
            <button className="dropdown-btn btn btn--white">
              <span>Labels</span>
              <Icon name="dropdown" size={10} />
            </button>
            <div id="myDropdown" className="dropdown__content">
              <a href="#">
                <div className="checkmark checkmark--show">
                  <Icon name="checkmark" size={10} />
                </div>
                <span>Work</span>
              </a>
              <a href="#">
                <div className="checkmark checkmark--hide">
                  <Icon name="checkmark" size={10} />
                </div>
                <span>Family</span>
              </a>
              <a href="#">
                <div className="checkmark checkmark--hide">
                  <Icon name="checkmark" size={10} />
                </div>
                <span>Friends</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="create-contact__inputs">
        <label>Name</label>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="create-contact__inputs">
        <label>Email address</label>
        <input
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="create-contact__inputs">
        <label>Phone number</label>
        <input
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="create-contact__buttons">
        <button className="btn btn--white">Cancel</button>
        <input type="submit" value="Create" className="btn" />
      </div>
    </form>
  );
};

export default CreateContact;
