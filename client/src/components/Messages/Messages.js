import React from 'react';

import Message from '../Message/Message';

import './messages.css';

const Messages = ({ messages, name }) => (
    <div className="message_container">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </div>
)

export default Messages;