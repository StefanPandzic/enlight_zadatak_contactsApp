import React from "react";
import { useState, useEffect, useRef } from "react";
import avatar from "../images/avatar.png";
import Icon from "./Icons";

const EditContact = (props) => {
  const refUpload = useRef();
  const [photo, setPhoto] = useState(null);
  const [contact, setContact] = useState(props.currentContact);

  useEffect(() => {
    setContact(props.currentContact);
    console.log("effect", props.currentContact);
  }, [props]);
  //const [photo, setPhoto] = useState('');
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [phone_number, setPhone] = useState("");
  //const [label, setLabel] = useState('');

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPhoto(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setContact.avatar(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }

    e.target.value = "";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.editContact(contact.id, contact);

    props.setEditing(false);
    props.setTitle("Contacts");
    props.setShowForm(false);
    document.querySelector(".contacts").classList.remove("hidden");
    /*setName("");
    setEmail("");
    setPhone("");*/
    //props.setEditing();
  };

  const onCancel = () => {
    props.setEditing(false);
    props.setTitle("Contacts");
    props.setShowForm(false);
    document.querySelector(".contacts").classList.remove("hidden");
    /* setName("");
    setEmail("");
    setPhone("");*/
  };

  //TODO FIX BUG on Change Image

  const uploadClick = () => {
    refUpload.current.click();
  };

  return (
    <form className="form-contact edit-contact" onSubmit={onSubmit}>
      <div className="form-contact__photo">
        <label>Photo</label>
        <div className="form-contact__photo-wrapper">
          <img src={props.currentContact.avatar} alt="Profile Photo" />
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
          name="name"
          value={contact.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-contact__inputs">
        <label>Email address</label>
        <input
          id="email_address"
          type="text"
          placeholder=""
          name="email"
          value={contact.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-contact__inputs">
        <label>Phone number</label>
        <input
          type="text"
          placeholder=""
          name="phone_number"
          value={contact.phone_number}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-contact__buttons">
        <button type="button" className="btn btn--white" onClick={onCancel}>
          Cancel
        </button>
        <input type="submit" value="Save" className="btn btn-input" />
      </div>
    </form>
  );
};

export default EditContact;
