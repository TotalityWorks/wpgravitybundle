import React from 'react';

export default function Button({ type, text, handleClick }) {
    return (
        <button type={type} handleClick={handleClick}>
            {text || 'Submit'}
        </button>
    )
}