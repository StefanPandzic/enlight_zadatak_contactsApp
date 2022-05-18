import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import faker from "faker";
import ContactsList from "./ContactsList";
import Icon from "./Icons";
import Button from "./Button";
import CreateContact from "./CreateContact";
import EditContact from "./EditContact";

const App = () => {
  const [showCreateContact, setShowCreateContact] = useState(false);
  const [title, setTitle] = useState("Contacts");
  const [filterContacts, setFilterContacts] = useState("all");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      avatar: `${faker.image.image()}`,
      name: "Jason Denton",
      phone_number: "+38165402602",
      email: "sdfsdfs@gmail.com",
      favorite: true,
    },
    {
      id: 2,
      avatar: `${faker.image.image()}`,
      name: "Stefan Pandzic",
      phone_number: "+38160562562",
      email: "sstefan@gmail.com",
      favorite: false,
    },
    {
      id: 3,
      avatar: `${faker.image.image()}`,
      name: "Paul Denton",
      phone_number: "+38167522535",
      email: "deusex@gmail.com",
      favorite: false,
    },
    {
      id: 4,
      avatar: `${faker.image.image()}`,
      name: "Lejla Pandzic",
      phone_number: "+38132423565",
      email: "layla@gmail.com",
      favorite: true,
    },
  ]);

  const allContacts = (e) => {
    e.preventDefault();
    setFilterContacts("all");
    setTitle("Contacts");
  };

  const favoriteContacts = (e) => {
    e.preventDefault();
    setFilterContacts("favorites");
    setTitle("Favorites");
  };

  // Add Contact
  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = { id, ...contact };
    setContacts([...contacts, newContact]);
  };

  // Delete Task
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const onEdit = (id) => {
    setShowCreateContact(!showCreateContact);

    if (showCreateContact) {
      setTitle("Contacts");
      document.querySelector(".contacts").classList.remove("hidden");
      document.querySelector(".create-contact").classList.add("hidden");
    } else {
      setTitle("Edit");
      document.querySelector(".contacts").classList.add("hidden");
      document.querySelector(".create-contact").classList.remove("hidden");
      const doc = (document.getElementById("email_address").value = "sss");
      console.log(doc);
    }
  };

  const onCreate = () => {
    setShowCreateContact(!showCreateContact);

    if (showCreateContact) {
      setTitle("Contacts");
      document.querySelector(".contacts").classList.remove("hidden");
      document.querySelector(".create-contact").classList.add("hidden");
    } else {
      setTitle("Create Contact");
      document.querySelector(".contacts").classList.add("hidden");
      document.querySelector(".create-contact").classList.remove("hidden");
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <div className="sidebar__cta">
          <Button
            onCreate={onCreate}
            text="Create contact"
            className="btn btn--create-contact"
          />
        </div>
        <nav className="sidebar__nav">
          <a
            href="/"
            onClick={allContacts}
            id="link-all"
            className="link link--active"
          >
            <Icon name="contact" size={22} />
            <span>Contacts</span>
            <div className="link__notification link__notification--active">
              {contacts.length}
            </div>
          </a>
          <a
            href="/"
            onClick={favoriteContacts}
            id="link-favorite"
            className="link"
          >
            <Icon name="star" size={22} />
            <span>Favorites</span>
            <div className="link__notification">{contacts.length}</div>
          </a>
          <div className="labels">
            <h4 className="header-4">Labels</h4>
          </div>
          <ul className="labels__list">
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Work</span>
                <div className="link__notification">2</div>
              </a>
            </li>
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Family</span>
                <div className="link__notification">6</div>
              </a>
            </li>
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Friends</span>
                <div className="link__notification">4</div>
              </a>
            </li>
          </ul>
          <button className="btn btn--transparent btn--create-label">
            <Icon name="plus" stroke="#000" color="#000" size={12} />
            <span>Create Label</span>
          </button>
        </nav>
      </div>
      <main className="main-section">
        <form action="#" className="search">
          <button className="search__button">
            <Icon name="search" size={16} />
          </button>
          <input type="text" className="search__input" placeholder="Search" />
        </form>
        <section className="heading">
          <h1 className="header-1">{title}</h1>
        </section>
        <ContactsList
          onDelete={deleteContact}
          onEdit={onEdit}
          contacts={contacts}
          filterContacts={filterContacts}
        />
        <CreateContact showCreateContact={onCreate} onAdd={addContact} />
        <EditContact showEditContact={onEdit} onEdit={onEdit} />
      </main>
    </div>
  );
};

export default App;
