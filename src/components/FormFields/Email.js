import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function EmailField({ field, state, setFormData}) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder, size } = field;
  const htmlId = `field_${formId}_${id}`;
  const [emailValue, setEmailValue] = useState('')
  const classes = `${size && size.toLowerCase() || ''} ${cssClass}`.trim();

  const handleChange = (event) => {
    const { value } = event.target;
    setEmailValue(value);
    const newEmailValue = value
    return updateFormState(type, id, state, newEmailValue, setFormData)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="email"
        name={id}
        id={htmlId}
        placeholder={placeholder}
        required={isRequired}
        value={emailValue}
        onChange={handleChange}
      />
    </div>
  );
}
