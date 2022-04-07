import React from 'react';

export default function Button({ type, text, onClick }) {
    return (
        <button type={type} onClick={onClick}>
            {text || 'Submit'}
        </button>
    )
}