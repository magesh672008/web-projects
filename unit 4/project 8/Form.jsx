import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function nameChange(event) {
        setName(event.target.value);
    }

    function emailChange(event) {
        setEmail(event.target.value);
    }

    function messageChange(event) {
        setMessage(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={nameChange}
                placeholder="Enter Name"
            />
            <p>Name: {name}</p>
            <p>Name Length: {name.length}</p>

            <input
                type="email"
                value={email}
                onChange={emailChange}
                placeholder="Enter Email"
            />
            <p>Email: {email}</p>
            <p>Email Length: {email.length}</p>

            <textarea
                value={message}
                onChange={messageChange}
                placeholder="Enter Message"
            />
            <p>Message: {message}</p>
            <p>Message Length: {message.length}</p>
        </div>
    );
}

export default Form;