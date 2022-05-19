import React from "react";
import { useState, useRef } from "react";
import avatar from "../images/avatar.png";
import Icon from "./Icons";

const CreateContact = ({ onAdd, setTitle, setShowForm }) => {
  const refUpload = useRef();
  const [photo, setPhoto] = useState(null);
  const [imgData, setImgData] = useState(avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  //const [label, setLabel] = useState('');

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPhoto(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }

    e.target.value = "";
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ avatar: imgData, name, email, phone_number });

    setImgData(avatar);
    //setPhoto(null);
    setName("");
    setEmail("");
    setPhone("");

    setShowForm(false);
    setTitle("Contacts");
    document.querySelector(".contacts").classList.remove("hidden");
    document.querySelector(".create-contact").classList.add("hidden");
  };

  const onCancel = () => {
    setImgData(avatar);
    setPhoto(null);
    setName("");
    setEmail("");
    setPhone("");

    setShowForm(false);
    setTitle("Contacts");
    document.querySelector(".contacts").classList.remove("hidden");
    document.querySelector(".create-contact").classList.add("hidden");
  };

  const uploadClick = () => {
    refUpload.current.click();
  };

  return (
    <form className="form-contact create-contact hidden" onSubmit={onSubmit}>
      <div className="form-contact__photo">
        <label>Photo</label>
        <div className="form-contact__photo-wrapper">
          <img src={imgData} alt="Profile Photo" />
        </div>
        <div className="form-contact__container">
          <button
            type="button"
            onClick={uploadClick}
            className="btn btn--white"
          >
            Change
          </button>
          <input ref={refUpload} type="file" onChange={onChangePicture} />
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

      <div className="form-contact__inputs">
        <label>Name</label>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-contact__inputs">
        <label>Email address</label>
        <input
          id="email_address"
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-contact__inputs">
        <label>Phone number</label>
        <input
          type="text"
          placeholder=""
          value={phone_number}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-contact__buttons">
        <button type="button" className="btn btn--white" onClick={onCancel}>
          Cancel
        </button>

        <input type="submit" value="Create" className="btn btn-input" />
      </div>
    </form>
  );
};

export default CreateContact;
