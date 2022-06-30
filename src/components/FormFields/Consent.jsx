import React, { useState } from "react"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function ConsentField(props) {
  const { field, state, setFormData, errors, setErrors, requiredFields } = props
  const {
    id,
    formId,
    type,
    label,
    description,
    cssClass,
    isRequired,
    checkboxLabel,
  } = field
  const htmlId = `field_${formId}_${id}`
  const [isChecked, setIsChecked] = useState(false)
  const { dispatch } = useFormContext()

  const handleChange = event => {
    const { value } = event.target
    setIsChecked(!isChecked)
    const newCheckedValue = isChecked ? null : value
    return updateFormState(field, newCheckedValue, dispatch)
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="checkbox"
        name={String(id)}
        id={htmlId}
        onChange={handleChange}
        checked={isChecked}
        required={isRequired}
      />
      <p>{checkboxLabel}</p>
    </div>
  )
}
