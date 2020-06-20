import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <input placeholder="Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                <input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={'/chat?name=' + name + '&room=' + room}>
                    <button className="Button" type="Submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;