import React from "react";

const AUTOCOMPLETE_ATTRIBUTES: {[key]} = {
  street: 'address-line1',
  lineTwo: 'address-line2',
  city: 'address-level2',
  state: 'address-level1',
  country: 'country-name',
};

export default function AddressField({ field, fieldErrors }) {
  return (
    <fieldset>
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
              autoComplete={AUTOCOMPLETE_ATTRIBUTES[key]}
              value={addressValues?.[key] ?? ''}
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