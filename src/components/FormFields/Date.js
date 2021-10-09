import React from "react";

export default function DateField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="date"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ''}
      />
    </div>
  );
}
