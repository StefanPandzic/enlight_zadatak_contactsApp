import React from "react";
import { useState, useEffect } from "react";
import Icon from "./Icons";

const SearchBar = ({
  updateContactList,
  filterContacts,
  contacts,
  favoritesContacts,
}) => {
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      if (filterContacts === "favorites") {
        const results = favoritesContacts.filter((contact) => {
          if (
            contact.name.toLowerCase().includes(keyword.toLowerCase()) ||
            contact.email.toLowerCase().includes(keyword.toLowerCase()) ||
            contact.phone_number.toLowerCase().includes(keyword.toLowerCase())
          )
            return contact;
        });
        updateContactList(results);
      } else {
        const results = contacts.filter((contact) => {
          if (
            contact.name.toLowerCase().includes(keyword.toLowerCase()) ||
            contact.email.toLowerCase().includes(keyword.toLowerCase()) ||
            contact.phone_number.toLowerCase().includes(keyword.toLowerCase())
          )
            return contact;
        });
        updateContactList(results);
      }
    } else if (filterContacts === "favorites") {
      updateContactList(favoritesContacts);
    } else {
      updateContactList(contacts);
    }
  };

  return (
    <form action="/" className="search">
      <button type="button" className="search__button">
        <Icon name="search" size={16} />
      </button>
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        onChange={filter}
      />
    </form>
  );
};

export default SearchBar;
