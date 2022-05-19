import React from "react";
import ContactItem from "./ContactItem";

const ContactsList = ({ onDelete, onEdit, foundContacts, onToggle }) => {
  const renderedContactsList = foundContacts.map((contact) => {
    //if (filterContacts === "all") {
    return (
      <ContactItem
        onDelete={onDelete}
        onToggle={onToggle}
        onEdit={onEdit}
        contact={contact}
      />
    );
    // } else if (filterContacts === "favorites") {
    // if (contact.favorite) {
    //    return <ContactItem contact={contact} />;
    //  }
    //   }
  });

  return (
    <table cellSpacing="0" cellPadding="0" className="contacts">
      <thead>
        <tr className="contacts__table-head">
          <th className="contacts__name">Name</th>
          <th className="contacts__email">Email</th>
          <th className="contacts__phone">Phone Number</th>
          <th className="contacts__control"></th>
        </tr>
      </thead>
      <tbody>{renderedContactsList}</tbody>
    </table>
  );
};

export default ContactsList;
