import React, { useState, useEffect } from "react";

import updateFormState from '../../updateFormState'

export default function CheckboxField({ field, state, setFormData }) {
  const { id, formId, type, label, description, cssClass, inputs, choices } = field;
  const checkboxInputs = choices?.map((choice, index) => ({ ...choice, id: inputs?.[index]?.id }));
  const htmlId = `field_${formId}_${id}`;
  const selectedBoxes = checkboxInputs.filter(box => box.isSelected);
  const [checkboxValue, setCheckboxValue] = useState(selectedBoxes)

  const handleChange = (event) => {
    const { value, checked } = event.target;
    let newCheckboxValue;
    checkboxInputs.map(box => {
        if(value !== box.value) {
            return
        }
        if(!checked) {
            const updatedBoxes = checkboxValue.filter(item => {
                return box.value !== item.value
            })
            newCheckboxValue = updatedBoxes
            return setCheckboxValue(updatedBoxes)
        }
        newCheckboxValue = [...checkboxValue, box]
        return setCheckboxValue([...checkboxValue, box])
    });
    return updateFormState(type, id, state, newCheckboxValue, setFormData)
  }

  return (
    <fieldset id={htmlId} className={`${cssClass}`.trim()}>
      <legend>{label}</legend>
      {checkboxInputs.map(({ id: inputId, text, value, isSelected }) =>
        <Checkbox 
            key={inputId}
            inputId={inputId}
            id={`input_${formId}_${id}_${inputId}`}
            htmlFor={`input_${formId}_${id}_${inputId}`}
            isSelected={isSelected}
            text={text}
            value={value}
            handleChangeProp={handleChange}
        />
      )}
    </fieldset>
  );
}

const Checkbox = (props) => {
    const { 
        inputId, 
        id, 
        htmlFor, 
        text, 
        isSelected, 
        value, 
        handleChangeProp
    } = props;
    const [checked, setChecked] = useState(isSelected);

    const handleChange = (e) => {
        handleChangeProp(e);
        setChecked(!checked)
    }

    return (
        <>
        <div>
          <input
            type="checkbox"
            name={String(inputId)}
            id={id}
            value={String(value)}
            onChange={handleChange}
            checked={checked}
          />
          <label htmlFor={htmlFor}>{text}</label>
        </div>
        </>
    )
}