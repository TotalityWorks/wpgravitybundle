import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function NameField({ field, state, setFormData }) {
  const { id, formId, type, label, description, cssClass, inputs, size } = field;
  const htmlId = `field_${formId}_${id}`;
  const prefixInput = inputs && inputs.find(input => input.key === 'prefix');
  const otherInputs = inputs?.filter(input => input?.key !== 'prefix') || [];
  const [nameValue, setNameValue] = useState()
  const classes = `${size && size.toLowerCase() || ''} ${cssClass}`.trim();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNameValue({...nameValue, [name]: value});
    const newNameValue = {...nameValue, [name]: value}
    return updateFormState(type, id, state, newNameValue, setFormData)
  }

  return (
    <fieldset id={htmlId} className={classes}>
      <legend>{label}</legend>
      {prefixInput && !prefixInput.isHidden ? 
        <>
            <select
                name={String(prefixInput.key)}
                id={`input_${formId}_${id}_${prefixInput.key}`}
                value={nameValue?.prefix}
                onChange={handleChange}
            >
                <option value=""></option>
                {prefixInput.choices?.map(choice =>
                  <option
                      key={choice?.value}
                      value={String(choice?.value)}
                  >
                      {String(choice?.text)}
                  </option>
                )}
            </select>
        </>
        : 
        null
      }
      {otherInputs && otherInputs.map(input => {
        const key = input.key;
        const inputLabel = input?.label || '';
        const placeholder = input?.placeholder || '';
        const isRequired = input?.isRequired || '';
        if(input.isHidden) {
            return;
        }
        return (
          <div key={key}>
            <label htmlFor={`input_${formId}_${id}_${key}`}>{inputLabel}</label>
            <input
              name={String(key)}
              type="text"
              id={`input_${formId}_${id}_${key}`}
              placeholder={placeholder}
              required={isRequired}
              value={nameValue?.[key]}
              onChange={handleChange}
            />
          </div>
        );
      }
      )}
    </fieldset>
  );
}