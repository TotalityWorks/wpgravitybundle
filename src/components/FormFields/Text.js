import React, { useState } from "react";

import { useFormContext } from '../../formContext'
import updateFormState from '../../updateFormState'

export default function TextField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder, size } = field;
  const htmlId = `field_${formId}_${id}`;
  const [textValue, setTextValue] = useState('')
  const classes = `${size && size.toLowerCase() || ''} ${cssClass}`.trim();
  const { dispatch } = useFormContext();
 
  const handleChange = (event) => {
    const { value } = event.target;
    setTextValue(value);
    const newTextValue = value
    return updateFormState(field, newTextValue, dispatch)
  }

  return (
    <div className={classes}>
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
