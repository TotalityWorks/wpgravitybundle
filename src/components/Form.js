import React, { useState } from 'react';

import FormsField from './FormsField';
import Button from './Button';

export default function Form({ form, buttonClass, onSubmit }) {
    const fields = form.formFields.nodes;
    const button = form.button;
    const [formData, setFormData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = formData
        return onSubmit(values)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {fields && fields.map((field, id) => (
                <FormsField 
                    key={`${id}-${field.type}`} 
                    field={field} 
                    state={formData} 
                    setFormData={setFormData} 
                />
            ))}

            {button && (
                <Button 
                    type={button.type} 
                    text={button.text}
                    cssClass={buttonClass}
                    onClick={handleSubmit}
                />
            )}
        </form>
        </>
    )
}