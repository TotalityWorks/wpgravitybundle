import React, { useState } from 'react';

import FormsField from './FormsField';
import Button from './Button';

export default function Form({ fields, button, onSubmit }) {
    const [formData, setFormData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = formData
        return onSubmit(values)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {fields.map((field, id) => (
                <FormsField 
                    key={`${id}-${field.type}`} 
                    field={field} 
                    state={formData} 
                    setFormData={setFormData} 
                />
            ))}
        </form>

        {button && (
            <Button 
                type={button.type} 
                text={button.text} 
                onClick={handleSubmit}
            />
        )}
        </>
    )
}