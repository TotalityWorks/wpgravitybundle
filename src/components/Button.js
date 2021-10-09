import React from 'react';

export default function Button({ type, text }) {
    return (
        <button type={type}>
            {text || 'Submit'}
        </button>
    )
}