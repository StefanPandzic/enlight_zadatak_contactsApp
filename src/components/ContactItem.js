import React from "react";

const ContactItem = ({ contact }) => {

    const closeFriend = (contact) => {
        if (contact.close_friend)
            return 'Yes';
        else return 'No';
    }

    return (
        <div className="contact-item">
            <div className="name">
                <h4 className="header-4 name__first-name">{contact.first_name}</h4>
                <h4 className="header-4 name__last-name">{contact.last_name}</h4>
            </div>
            <p className="contact-item__phone-number">Number: {contact.phone_number}</p>
            <p className="contact-item__email">Email: {contact.email}</p>
            <div className="contact-item__friend">Close Friend: {closeFriend(contact)}</div>
        </div>
    );

}

export default ContactItem;