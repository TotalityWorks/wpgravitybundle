import React from 'react';

export default function Button({ type, text, cssClass, onClick }) {
    return (
        <div className={`${cssClass}`.trim()}>
            <button type={type} onClick={onClick}>
                {text || 'Submit'}
            </button>
        </div>
    )
}