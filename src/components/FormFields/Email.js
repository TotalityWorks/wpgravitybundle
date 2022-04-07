import React, { useState } from "react";

export default function EmailField({ field, state, setFormData}) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [emailValue, setEmailValue] = useState('')
  
  const handleChange = (event) => {
    const { value } = event.target;
    setEmailValue(value);
    const newEmailValue = value
    return updateFormState(newEmailValue)
  }

  const updateFormState = (emailValue) => {
    const valueId = `${type}${id}`
    const values = {
      ...state,
      [valueId]: emailValue
    }
    return setFormData(values)
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
        value={emailValue}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(emailValue, null, 2)}</pre>
    </div>
  );
}