import React from "react";
import { useState } from "react";
import Button from "./Button";

const AddContact = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [friend, setFriend] = useState(true);



    return (
        <div id="add-contact" className="add-contact">
            <div className="add-contact__content">
                <h2 class="heading-2">
                    Add Contact
                </h2>
                <form className="form">
                    <div class="form__group">
                        <input type="text" class="form__input" placeholder="First Name" id="first-name" required />
                        <label for="first-name" class="form__label">First Name</label>
                    </div>
                    <div class="form__group">
                        <input type="text" class="form__input" placeholder="Last Name" id="last-name" required />
                        <label for="last-name" class="form__label">Last Name</label>
                    </div>
                    <div class="form__group">
                        <input type="text" class="form__input" placeholder="Phone Number" id="phone-number" required />
                        <label for="phone-number" class="form__label">Phone Number</label>
                    </div>
                    <div class="form__group">
                        <input type="email" class="form__input" placeholder="Email address" id="email" required />
                        <label for="email" class="form__label">Email address</label>
                    </div>
                    <div class="form__group">
                        <label>Close Friend</label>
                        <div class="form__radio-group">
                            <input type="radio" class="form__radio-input" id="friend-yes" name="close-friend" />
                            <label for="friend-yes" class="form__radio-label">
                                <span class="form__radio-button"></span>
                                Yes
                            </label>
                        </div>

                        <div class="form__radio-group">
                            <input type="radio" class="form__radio-input" id="friend-no" name="close-friend" />
                            <label for="friend-no" class="form__radio-label">
                                <span class="form__radio-button"></span>
                                No
                            </label>
                        </div>
                    </div>

                    <div class="form__group">
                        <button class="btn btn--green">Next step &rarr;</button>
                    </div>

                </form>
            </div>
        </div>
    );

}

export default AddContact;