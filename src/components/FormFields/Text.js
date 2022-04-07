import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function TextField({ field, state, setFormData}) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ textValue, setTextValue ] = useState('')
  
  const handleChange = (event) => {
    const { value } = event.target;
    setTextValue(value);
    const newTextValue = value
    return updateFormState(type, id, state, newTextValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="text"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ''}
        value={textValue}
        onChange={handleChange}
      />
    </div>
  );
}