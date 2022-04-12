import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function TextAreaField({ field, state, setFormData }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder, size } = field;
  const htmlId = `field_${formId}_${id}`;
  const [textAreaValue, setTextAreaValue] = useState('')
  const classes = `${size && size.toLowerCase() || ''} ${cssClass}`.trim();
 
  const handleChange = (event) => {
    const { value } = event.target;
    setTextAreaValue(value);
    const newTextAreaValue = value
    return updateFormState(type, id, state, newTextAreaValue, setFormData)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <textarea
        name={id}
        id={htmlId}
        required={isRequired}
        value={textAreaValue}
        onChange={handleChange}
        placeholder={placeholder || ''}
      />
    </div>
  );
}
