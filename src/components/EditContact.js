import React from "react";
import { useState } from "react";
import avatar from "../images/avatar.png";
import Icon from "./Icons";
import Link from "./Link";
import Button from "./Button";

const EditContact = ({ currentContact }) => {
  //const [photo, setPhoto] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  //const [label, setLabel] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
  };

  const onCancel = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="create-contact" onSubmit={onSubmit}>
      <div className="create-contact__photo">
        <label>Photo</label>
        <img src={avatar} alt="Profile Photo" />
        <div className="create-contact__container">
          <button type="button" className="btn btn--white">
            Change
          </button>
          <div className="dropdown">
            <button type="button" className="dropdown-btn btn btn--white">
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
          id="email_address"
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
          value={phone_number}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="create-contact__buttons">
        <Link href="/" className="link">
          <Button text="Cancel" className="btn btn--white" onClick={onCancel} />
        </Link>
        <input type="submit" value="Edit" className="btn btn-input" />
      </div>
    </form>
  );
};

export default EditContact;
