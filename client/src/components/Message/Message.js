import React from 'react';

import './message.css';

const Message = ({ message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimName = name.trim().toLowerCase();

    if (user === trimName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                </div>
                <p className="sentText pr-10">{trimName}</p>
            </div>
        ) : (<div className="messageContainer justifyStart">
        <p className="sentText pl-10">{user}</p>
        <div className="messageBox backgroundWhite">
            <p className="messageText colorDark">{text}</p>
        </div>
    </div>
            )
    )
};

export default Message;