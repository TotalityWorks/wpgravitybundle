import React from "react";

export default function EmailField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="email"
        name={String(id)}
        id={htmlId}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
}
