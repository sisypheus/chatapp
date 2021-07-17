import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onSendForm = (e) => (!name || !room) ? e.preventDefault() : null

    return (
        <div className="body">
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <p><input placeholder="Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></p>
                <p><input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} /></p>
                <Link onClick={onSendForm} to={'/chat?name=' + name + '&room=' + room}>
                    <button className="Button" type="Submit">Sign In</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Join;