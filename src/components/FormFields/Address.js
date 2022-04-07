import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function AddressField({ field, state, setFormData }) {
    const { id, formId, type, label, description, cssClass, inputs } = field;
    const htmlId = `field_${formId}_${id}`;
    const [addressValue, setAddressValue] = useState()
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setAddressValue({...addressValue, [name]: value});
      const newAddressValue = {...addressValue, [name]: value}
      return updateFormState(type, id, state, newAddressValue, setFormData)
    }

    return (
    <fieldset id={htmlId} className={`${cssClass}`.trim()}>
      <legend>{label}</legend>
      {inputs?.map(input => {
        const key = input?.key;
        const inputLabel = input?.label || '';
        const placeholder = input?.placeholder || '';

        return (
          <div key={key}>
            <input
              type="text"
              name={String(key)}
              id={`input_${formId}_${id}_${key}`}
              placeholder={placeholder}
              value={addressValue?.[key]}
              onChange={handleChange}
            />
            <label htmlFor={`input_${formId}_${id}_${key}`}>{inputLabel}</label>
          </div>
        );
      }
      )}
    </fieldset>
  );
}