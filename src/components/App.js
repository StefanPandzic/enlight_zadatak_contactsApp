import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import faker from "faker";
import ContactsList from "./ContactsList";
import Icon from "./Icons";
import CreateContact from "./CreateContact";
import EditContact from "./EditContact";
import SearchBar from "./SearchBar";
import avatar from "../images/avatar.png";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

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
    {
      id: 5,
      avatar: `${faker.image.image()}`,
      name: "Stefan Carter",
      phone_number: "+38133234565",
      email: "carter@gmail.com",
      favorite: true,
    },
  ];

  const initialFormState = {
    id: null,
    avatar: { avatar },
    name: "",
    phone_number: "",
    email: "",
  };

  //Setting State
  const [contacts, setContacts] = useState(contactData);
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("Contacts");
  const [filterContacts, setFilterContacts] = useState("all");
  const [foundContacts, setFoundContacts] = useState(contacts);
  const [favoritesContacts, setFavoritesContacts] = useState(contacts);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  //Rerender after states Change
  useEffect(() => {
    updateContactList(contacts);
    setFavoritesContacts(contacts.filter((contact) => contact.favorite));
  }, [contacts, editing]);

  const updateContactList = (results) => {
    setFoundContacts(results);
  };

  // Add Contact
  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = { id, ...contact };
    setContacts([...contacts, newContact]);
  };

  // Create Function
  const onCreate = () => {
    setShowForm(true);
    setTitle("Create Contact");

    if (!editing) {
      document.querySelector(".contacts").classList.add("hidden");
      document.querySelector(".create-contact").classList.remove("hidden");
    }
  };

  // Delete Contact

  const showDeleteModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const delContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setShowModal(false);
  };

  // Edit Contact
  const editContact = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  //Toggle
  const toggleFavorite = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, favorite: !contact.favorite }
          : contact
      )
    );
  };

  const editRow = (contact) => {
    setEditing(true);
    setShowForm(true);
    setTitle("Edit Contact");
    document.querySelector(".contacts").classList.add("hidden");

    setCurrentContact({
      id: contact.id,
      avatar: contact.avatar,
      name: contact.name,
      phone_number: contact.phone_number,
      email: contact.email,
    });
  };

  //Filter
  /*
  const showAllContact = (e) => {
    e.preventDefault();

    setFoundContacts(contacts);
  };

  const showFavorites = (e) => {
    e.preventDefault();
    console.log(e);
  };*/

  return (
    <div className="container">
      <Modal
        show={showModal}
        bsPrefix="modal-window"
        animation={false}
        autoFocus={false}
        onHide={() => setShowModal(false)}
      >
        <h2 className="header-2">Delete Contact</h2>
        <p>Are you sure you want to delete this contact?</p>
        <div className="modal-window__buttons">
          <button
            className="btn modal-window__mbtn btn--white"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn modal-window__mbtn btn--red"
            onClick={() => delContact(deleteId)}
          >
            Delete
          </button>
        </div>
      </Modal>
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
          <Nav defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link bsPrefix="link link--active">
                <Icon name="contact" size={22} />
                <span>Contacts</span>
                <div className="link__notification link__notification--active">
                  {contacts.length}
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link bsPrefix="link" eventKey="link-favorites">
                <Icon name="star" size={22} />
                <span>Favorites</span>
                <div className="link__notification">
                  {favoritesContacts.length}
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="labels">
            <h4 className="header-4">Labels</h4>
          </div>
          <ul className="labels__list">
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Work</span>
                <div className="link__notification">0</div>
              </a>
            </li>
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Family</span>
                <div className="link__notification">0</div>
              </a>
            </li>
            <li className="labels__item">
              <a href="#" className="link">
                <Icon name="ribbon" size={22} />
                <span>Friends</span>
                <div className="link__notification">0</div>
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
        <SearchBar contacts={contacts} updateContactList={updateContactList} />
        <section className="heading">
          <h1 className="header-1">{title}</h1>
        </section>
        <ContactsList
          onDelete={showDeleteModal}
          onEdit={editRow}
          onToggle={toggleFavorite}
          foundContacts={foundContacts}
        />
        {editing ? (
          <EditContact
            editing={editing}
            setEditing={setEditing}
            title={title}
            setTitle={setTitle}
            currentContact={currentContact}
            editContact={editContact}
            setShowForm={setShowForm}
          />
        ) : (
          <CreateContact
            onAdd={addContact}
            setTitle={setTitle}
            setShowForm={setShowForm}
          />
        )}
      </main>
    </div>
  );
};

export default App;
