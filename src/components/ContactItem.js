import React from "react";
import Icon from "./Icons";
import Link from "./Link";

const ContactItem = ({ onDelete, onEdit, contact }) => {
  //const ref = useRef();
  //const editContact = e;
  const editContact = () => {
    onEdit(contact.id);
  };

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
        <a className="favorite">
          <Icon name="star" size={22} />
        </a>
        <a className="trash" onClick={() => onDelete(contact.id)}>
          <Icon name="trash" size={22} />
        </a>
        <Link
          href={`/edit-contact`}
          sendContact={contact}
          editContact={editContact}
          className="edit"
        >
          <Icon name="pen" size={22} />
        </Link>
      </td>
    </tr>
  );
};

export default ContactItem;
