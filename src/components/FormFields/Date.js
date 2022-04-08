import React, { useState } from "react";
import { format } from 'date-fns'

import updateFormState from '../../updateFormState'

export default function DateField({ field, state, setFormData }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ dateValue, setDateValue ] = useState('');
  
  const handleChange = (event) => {
    const { value } = event.target;
    // formattedValue is one day prior due to Timezone issues. Must fix.
    const formattedValue = format(new Date(value), "MM/dd/yyyy")
    setDateValue(value);
    const newDateValue = formattedValue;
    return updateFormState(type, id, state, newDateValue, setFormData)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="date"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ''}
        value={dateValue}
        onChange={handleChange}
      />
    </div>
  );
}
