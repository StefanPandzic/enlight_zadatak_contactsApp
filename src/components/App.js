import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import ContactsList from "./ContactsList";
import Icon from "./Icons";
/*
const contacts = [

    {
        id: 4,
        first_name: "Jason",
        last_name: "Denton",
        phone_number: "065402602",
        email: 'sdfsdfs@gmail.com',
        close_friend: true
    },
    {
        id: 5,
        first_name: "Stefan",
        last_name: "Pandzc",
        phone_number: "060562562",
        email: 'sstefan@gmail.com',
        close_friend: false
    },
    {
        id: 6,
        first_name: "Paul",
        last_name: "Denton",
        phone_number: "067522535",
        email: 'deusex@gmail.com',
        close_friend: true
    },
    {
        id: 7,
        first_name: "Jason",
        last_name: "Denton",
        phone_number: "065402602",
        email: 'sdfsdfs@gmail.com',
        close_friend: true
    },
    {
        id: 8,
        first_name: "Stefan",
        last_name: "Pandzc",
        phone_number: "060562562",
        email: 'sstefan@gmail.com',
        close_friend: false
    },
    {
        id: 9,
        first_name: "Paul",
        last_name: "Denton",
        phone_number: "067522535",
        email: 'deusex@gmail.com',
        close_friend: true
    },
]*/

const App = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Jason",
      phone_number: "065402602",
      email: "sdfsdfs@gmail.com",
    },
    {
      id: 2,
      name: "Stefan",
      phone_number: "060562562",
      email: "sstefan@gmail.com",
    },
    {
      id: 3,
      name: "Paul",
      phone_number: "067522535",
      email: "deusex@gmail.com",
    },
  ]);

  return (
    <div className="container">
      <div className="sidebar">
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <div className="sidebar__cta">
          <button className="btn btn--create-contact">
            <Icon name="plus" size={12} />
            <span>Create contact</span>
          </button>
        </div>
        <nav className="sidebar__nav">
          <a href="#" className="link link--active">
            <Icon name="contact" size={22} />
            <span>Contacts</span>
          </a>
          <a href="#" className="link">
            <Icon name="star" size={22} />
            <span>Favorites</span>
          </a>
          <div className="labels">
            <h4 className="header-4">Labels</h4>
          </div>
          <ul className="labels__list">
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Work</span>
                <div className="notification">2</div>
              </a>
            </li>
            <li className="labels__item">
              {" "}
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Family</span>
                <div className="notification">6</div>
              </a>
            </li>
            <li className="labels__item">
              {" "}
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Friends</span>
                <div className="notification">4</div>
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
          <h1 className="header-1">Heading</h1>
        </section>
        <ContactsList />
      </main>
    </div>
  );
};

export default App;
