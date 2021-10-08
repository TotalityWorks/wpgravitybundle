import React from "react";

export default function NameField({ field }) {
  const { id, formId, type, label, description, cssClass, inputs } = field;
  const htmlId = `field_${formId}_${id}`;
  const prefixInput = inputs.find(input => input.key === 'prefix');
  const otherInputs = inputs?.filter(input => input?.key !== 'prefix') || [];

  return (
    <fieldset id={htmlId} className={`${cssClass}`.trim()}>
      <legend>{label}</legend>
      {!prefixInput.isHidden && prefixInput ? 
        <>
            <select
                name={String(prefixInput.key)}
                id={`input_${formId}_${id}_${prefixInput.key}`}
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
        const isRequired = input?.isRequired || '';
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
              required={isRequired}
            />
          </div>
        );
      }
      )}
    </fieldset>
  );
}