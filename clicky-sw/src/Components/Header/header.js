import React from 'react';

import './style.css';

function Header(props) {
    return (
        <header>
        <div className= "title">Star Wars ClickyGame</div>
        <div className= "sb"> Score: {props.score}</div>
        </header>
    )
}

export default Header