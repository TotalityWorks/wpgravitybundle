import React, { useState } from "react";

export default function TextAreaField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ textArea, setTextArea ] = useState('')
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    return setTextArea({...textArea, [name]: value});
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <textarea
        name={id}
        id={htmlId}
        required={isRequired}
        value={textArea.textArea}
        onChange={handleChange}
      />
    </div>
  );
}
