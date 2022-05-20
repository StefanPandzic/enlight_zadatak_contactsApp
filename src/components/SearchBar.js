import React from "react";
import Icon from "./Icons";

const SearchBar = ({ updateContactList, contacts }) => {
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = contacts.filter((contact) => {
        if (
          contact.name.toLowerCase().includes(keyword.toLowerCase()) ||
          contact.email.toLowerCase().includes(keyword.toLowerCase()) ||
          contact.phone_number.toLowerCase().includes(keyword.toLowerCase())
        )
          return contact;
        // Use the toLowerCase() method to make it case-insensitive
      });
      updateContactList(results);
    } else {
      updateContactList(contacts);
      // If the text field is empty, show all users
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
