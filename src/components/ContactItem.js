import React from "react";
import Icon from "./Icons";

const ContactItem = ({ onDelete, onEdit, onToggle, contact }) => {
  return (
    <tr className="contact-item">
      <td className="contact-item__full-name">
        <div className="contact-item__image">
          <img src={contact.avatar} alt="ContactPhoto" />
        </div>
        <h4 className="contact-item__name">{contact.name}</h4>
      </td>
      <td className="contact-item__email">{contact.email}</td>
      <td className="contact-item__phone-number">{contact.phone_number}</td>
      <td className="contact-item__control">
        {contact.favorite ? (
          <a className="favorite" onClick={() => onToggle(contact.id)}>
            <Icon name="star-dark" size={22} />
          </a>
        ) : (
          <a className="favorite" onClick={() => onToggle(contact.id)}>
            <Icon name="star" size={22} />
          </a>
        )}

        <a className="trash" onClick={() => onDelete(contact.id)}>
          <Icon name="trash" size={22} />
        </a>
        <a className="pen" onClick={() => onEdit(contact)}>
          <Icon name="pen" size={22} />
        </a>
      </td>
    </tr>
  );
};

export default ContactItem;
