/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useFormContext } from '../../formContext';
import updateFormState from '../../updateFormState';

export default function AddressField({ field }) {
  const {
    id, formId, label, cssClass, inputs, size,
  } = field;
  const htmlId = `field_${formId}_${id}`;
  const [addressValue, setAddressValue] = useState();
  const classes = `${(size && size.toLowerCase()) || ''} ${cssClass}`.trim();
  const { state: formData, dispatch } = useFormContext();
  const context = { formData, dispatch };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressValue({ ...addressValue, [name]: value });
    const newAddressValue = { ...addressValue, [name]: value };
    return updateFormState(field, newAddressValue, context);
  };

  return (
    <fieldset id={htmlId} className={classes}>
      <legend>{label}</legend>
      {inputs?.map((input) => {
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
      })}
    </fieldset>
  );
}
