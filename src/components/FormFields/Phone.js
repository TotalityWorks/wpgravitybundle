import React, { useState } from "react";

export default function PhoneField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ phone, setPhone ] = useState('')
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    return setPhone({...phone, [name]: value});
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
        value={phone.phone}
        onChange={handleChange}
      />
    </div>
  );
}
