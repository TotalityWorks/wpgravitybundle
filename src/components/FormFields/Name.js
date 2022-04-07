import React, { useState } from "react";

export default function NameField({ field, state, setFormData }) {
  const { id, formId, type, label, description, cssClass, inputs } = field;
  const htmlId = `field_${formId}_${id}`;
  const prefixInput = inputs.find(input => input.key === 'prefix');
  const otherInputs = inputs?.filter(input => input?.key !== 'prefix') || [];
  const [nameValue, setNameValue] = useState()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNameValue({...nameValue, [name]: value});
    const newNameValue = {...nameValue, [name]: value}
    return updateFormState(newNameValue)
  }

  const updateFormState = (nameValue) => {
    const valueId = `${type}${id}`
    const values = {
      ...state,
      [valueId]: nameValue
    }
    return setFormData(values)
  }

  return (
    <fieldset id={htmlId} className={`${cssClass}`.trim()}>
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
      {otherInputs.map(input => {
        const key = input.key;
        const inputLabel = input?.label || '';
        const placeholder = input?.placeholder || '';
        if(input.isHidden) {
            return;
        }
        return (
          <div key={key}>
            <label htmlFor={`input_${formId}_${id}_${key}`}>{inputLabel}</label>
            <input
              type="text"
              name={String(key)}
              id={`input_${formId}_${id}_${key}`}
              placeholder={placeholder}
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