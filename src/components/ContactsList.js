import React from "react";
import ContactItem from "./ContactItem";

const ContactsList = (props) => {

    const renderedContactsList = props.contacts.map((contact) => {
        return (
            <ContactItem contact={contact} />
        );
    });



    return (
        <div className="contacts">{renderedContactsList}</div>
    );

}

export default ContactsList;