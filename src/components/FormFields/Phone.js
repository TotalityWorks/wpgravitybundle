import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function PhoneField({ field, state, setFormData }) {
  const { 
    id, 
    formId, 
    type, 
    label, 
    description, 
    cssClass, 
    isRequired, 
    placeholder, 
    phoneFormat 
    // phoneFormat is either "STANDARD" or "INTERNATIONAL"
    // does not matter for return value, but does for field validation
  } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ phoneValue, setPhoneValue ] = useState('')

  const handleChange = (event) => {
    const { value } = event.target;
    setPhoneValue(value);
    const newTextValue = value
    return updateFormState(type, id, state, newTextValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="tel"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ''}
        value={phoneValue}
        onChange={handleChange}
      />
    </div>
  );
}
