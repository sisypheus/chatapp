import React from 'react';

import Message from '../Message/Message';

const Messages = ({ messages, name }) => {
    return (
        <div className="message_container">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </div>
    )
}

export default Messages;