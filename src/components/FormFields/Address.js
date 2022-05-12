import React, { useState } from "react";

import updateFormState from '../../updateFormState'

export default function AddressField(props) {
    const { field, state, setFormData, errors, setErrors, requiredFields } = props;
    const { id, formId, type, label, description, cssClass, inputs, size } = field;
    const htmlId = `field_${formId}_${id}`;
    const [addressValue, setAddressValue] = useState()
    const classes = `${size && size.toLowerCase() || ''} ${cssClass}`.trim();

    const handleChange = (event) => {
      const { name, value } = event.target;
      setAddressValue({...addressValue, [name]: value});
      const newAddressValue = {...addressValue, [name]: value}
      return updateFormState(field, state, newAddressValue, setFormData, errors, setErrors, requiredFields)
    }

    return (
    <fieldset id={htmlId} className={classes}>
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