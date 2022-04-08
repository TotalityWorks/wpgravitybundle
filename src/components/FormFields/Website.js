import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function WebsiteField({ field, state, setFormData}) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [websiteValue, setWebsiteValue] = useState('')

  const handleChange = (event) => {
    const { value } = event.target;
    setWebsiteValue(value);
    const newWebsiteValue = value
    return updateFormState(type, id, state, newWebsiteValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="url"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ''}
        value={websiteValue}
        onChange={handleChange}
      />
    </div>
  );
}
