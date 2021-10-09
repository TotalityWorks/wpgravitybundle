import React from "react";

export default function SelectField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, defaultValue, choices } = field;
  const htmlId = `field_${formId}_${id}`;

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <select
        name={id}
        id={htmlId}
        required={isRequired}
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
