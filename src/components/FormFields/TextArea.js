import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function TextAreaField({ field, state, setFormData }) {
  const { id, formId, type, label, description, cssClass, isRequired } = field;
  const htmlId = `field_${formId}_${id}`;
  const [textAreaValue, setTextAreaValue] = useState('')
  
  const handleChange = (event) => {
    const { value } = event.target;
    setTextAreaValue(value);
    const newTextAreaValue = value
    return updateFormState(type, id, state, newTextAreaValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <textarea
        name={id}
        id={htmlId}
        required={isRequired}
        value={textAreaValue}
        onChange={handleChange}
      />
    </div>
  );
}
