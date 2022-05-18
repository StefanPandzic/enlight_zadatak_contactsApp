import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import faker from "faker";
import ContactsList from "./ContactsList";
import Icon from "./Icons";
import CreateContact from "./CreateContact";
import EditContact from "./EditContact";
import Route from "./Route";

const App = () => {
  //Data
  const contactData = [
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
  ];

  const initialFormState = {
    id: null,
    name: "",
    phone_number: "",
    email: "",
  };

  //Setting State
  const [contacts, setContacts] = useState(contactData);
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [showCreateContact, setShowCreateContact] = useState(false);
  const [title, setTitle] = useState("Contacts");

  // Add Contact
  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = { id, ...contact };
    setContacts([...contacts, newContact]);
  };

  // Delete Contact
  const deleteContact = (id) => {
    setEditing(false);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Edit Contact
  const editContact = (id, updatedContact) => {
    setEditing(false);
    setTitle("Contacts");
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  //TODO Fix BUG ShowCreate

  const editRow = (contact) => {
    setEditing(true);
    setTitle("Edit Contact");

    setCurrentContact({
      id: contact.id,
      name: contact.name,
      phone_number: contact.phone_number,
      email: contact.email,
    });
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

  //TODO Implement Search

  return (
    <div className="container">
      <div className="sidebar">
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <div className="sidebar__cta">
          <button
            type="button"
            className="btn btn--create-contact"
            onClick={onCreate}
          >
            <Icon name="plus" size={12} />
            <span>Create contact</span>
          </button>
        </div>
        <nav className="sidebar__nav">
          <a className="link link--active" href="/">
            <Icon name="contact" size={22} />
            <span>Contacts</span>
            <div className="link__notification link__notification--active">
              {contacts.length}
            </div>
          </a>
          <a className="link" href="/favorites">
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
          onEdit={editRow}
          contacts={contacts}
        />
        {editing ? (
          <EditContact
            editing={editing}
            setEditing={setEditing}
            title={title}
            setTitle={setTitle}
            currentContact={currentContact}
            editContact={editContact}
          />
        ) : (
          <CreateContact onAdd={addContact} showCreateContact={onCreate} />
        )}

        <Route path="/favorites">
          <section className="heading">
            <h1 className="header-1">Favorites</h1>
          </section>
          <ContactsList
            onDelete={deleteContact}
            onEdit={editRow}
            contacts={contacts}
          />
        </Route>
      </main>
    </div>
  );
};

export default App;
