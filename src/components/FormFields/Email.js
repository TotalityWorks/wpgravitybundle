import React, { useState } from "react";

export default function EmailField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ email, setEmail ] = useState('')
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    return setEmail({...email, [name]: value});
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="email"
        name={id}
        id={htmlId}
        placeholder={placeholder}
        required={isRequired}
        value={email.email}
        onChange={handleChange}
      />
    </div>
  );
}
