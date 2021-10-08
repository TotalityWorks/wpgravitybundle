import React from "react";

export default function TextAreaField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired } = field;
  const htmlId = `field_${formId}_${id}`;

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <textarea
        name={id}
        id={htmlId}
        required={isRequired}
      />
    </div>
  );
}
