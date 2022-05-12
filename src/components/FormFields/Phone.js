import React, { useState } from "react";

import { useFormContext } from '../../formContext'
import updateFormState from '../../updateFormState'

export default function PhoneField({ field }) {
  const { 
    id, 
    formId, 
    type, 
    label, 
    description, 
    cssClass, 
    isRequired, 
    placeholder, 
    phoneFormat,
    size
    // phoneFormat is either "STANDARD" or "INTERNATIONAL"
    // does not matter for return value, but does for field validation
  } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ phoneValue, setPhoneValue ] = useState('')
  const classes = `${size && size.toLowerCase() || ''} ${cssClass}`.trim();
  const { dispatch } = useFormContext();

  const handleChange = (event) => {
    const { value } = event.target;
    setPhoneValue(value);
    const newPhoneValue = value
    return updateFormState(field, newPhoneValue, dispatch)
  }

  return (
    <div className={classes}>
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
