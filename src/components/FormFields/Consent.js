import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function ConsentField({ field, state, setFormData}) {
  const { id, formId, type, label, description, cssClass, isRequired, checkboxLabel } = field;
  const htmlId = `field_${formId}_${id}`;
  const [isChecked, setIsChecked] = useState(false)
  
  const handleChange = (event) => {
    const { value } = event.target;
    setIsChecked(!isChecked);
    const newCheckedValue = value;
    return updateFormState(type, id, state, newCheckedValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
        <label htmlFor={htmlId}>{label}</label>
        <input
            type="checkbox"
            name={String(id)}
            id={htmlId}
            onChange={handleChange}
            checked={isChecked}
            required={isRequired}
        />
        <p>{checkboxLabel}</p>
    </div>
  );
}
