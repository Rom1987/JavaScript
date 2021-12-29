import React from 'react'
import './header.css';

export default function Fheader(props) {
    return (
        <header className="header">
            <h1>Hello, {props.name}</h1>
        </header>
    )
}
