import React, { useState, useEffect } from "react";

import updateFormState from '../../updateFormState'

export default function SelectField({ field, state, setFormData }) {
  const { 
    id, 
    formId, 
    type, 
    label, 
    description, 
    cssClass, 
    isRequired, 
    defaultValue, 
    choices 
  } = field;
  const htmlId = `field_${formId}_${id}`;
  const [selectValue, setSelectValue] = useState(defaultValue);

  useEffect(() => {
    updateFormState(type, id, state, defaultValue, setFormData)
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectValue(value);
    const newSelectValue = value;
    return updateFormState(type, id, state, newSelectValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <select
        name={id}
        id={htmlId}
        required={isRequired}
        value={selectValue}
        onChange={handleChange}
      >
        {choices?.map(choice =>
          <option 
            key={choice?.value || ''} 
            value={choice?.value || ''}
          >
            {choice?.text || ''}
          </option>
        )}
      </select>
    </div>
  );
}
