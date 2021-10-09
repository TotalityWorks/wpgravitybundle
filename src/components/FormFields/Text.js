import React, { useState } from "react";

export default function TextField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ text, setText ] = useState('')
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    return setText({...text, [name]: value});
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
        value={text.text}
        onChange={handleChange}
      />
    </div>
  );
}
