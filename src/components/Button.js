import React from 'react';

import { useFormContext } from '../formContext';

export default function Button({ type, text, cssClass, onClick }) {
    const { state } = useFormContext();
    const disabled = Object.keys(state.errors).length || state.requiredFields.length;

    return (
        <div className={`${cssClass}`.trim()}>
            <button 
                type={type} 
                onClick={onClick} 
                disabled={disabled}
            >
                {text || 'Submit'}
            </button>
        </div>
    )
}