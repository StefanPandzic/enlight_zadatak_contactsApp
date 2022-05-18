import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import faker from "faker";
import ContactsList from "./ContactsList";
import Icon from "./Icons";
import Button from "./Button";
import CreateContact from "./CreateContact";
import EditContact from "./EditContact";
import Route from "./Route";
import Link from "./Link";

const App = () => {
  const [filterContacts, setFilterContacts] = useState("all");
  const [currentContactId, setcurrentContactId] = useState(0);
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

  useEffect(() => {
    //console.log(currentContactId);
  }, [currentContactId]);

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

  const editContact = (id) => {
    /*setcurrentContact(
      contacts.map((contact) => {
        if (contact.id === id) {
          console.log(id);
        }
      })
    );*/

    //currentContactId = id;
    setcurrentContactId(id);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <div className="sidebar__cta">
          <Link href="/create-contact">
            <Button
              text="Create contact"
              iconName="plus"
              className="btn btn--create-contact"
            />
          </Link>
        </div>
        <nav className="sidebar__nav">
          <Link className="link link--active" href="/">
            <Icon name="contact" size={22} />
            <span>Contacts</span>
            <div className="link__notification link__notification--active">
              {contacts.length}
            </div>
          </Link>
          <Link className="link" href="/favorites">
            <Icon name="star" size={22} />
            <span>Favorites</span>
            <div className="link__notification">{contacts.length}</div>
          </Link>
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
        <Route path="/">
          <section className="heading">
            <h1 className="header-1">Contacts</h1>
          </section>
          <ContactsList
            onDelete={deleteContact}
            onEdit={editContact}
            contacts={contacts}
            filterContacts={filterContacts}
          />
        </Route>
        <Route path="/create-contact">
          <section className="heading">
            <h1 className="header-1">Create Contact</h1>
          </section>
          <CreateContact onAdd={addContact} />
        </Route>
        <Route path={`/edit-contact`}>
          <section className="heading">
            <h1 className="header-1">Edit Contact</h1>
          </section>
          <EditContact currentContact={currentContactId} />
        </Route>
        <Route path="/favorites">
          <section className="heading">
            <h1 className="header-1">Favorites</h1>
          </section>
          <ContactsList
            onDelete={deleteContact}
            onEdit={editContact}
            contacts={contacts}
            filterContacts={filterContacts}
          />
        </Route>
      </main>
    </div>
  );
};

export default App;
