import React, { useState } from "react";

export default function SelectField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, defaultValue, choices } = field;
  const htmlId = `field_${formId}_${id}`;
  const defaultState = {
    [id]: defaultValue
  };
  const [ select, setSelect ] = useState(defaultState);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    return setSelect({[name]: value});
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <select
        name={id}
        id={htmlId}
        required={isRequired}
        value={select.select}
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
