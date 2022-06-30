import React, { useState } from "react"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function EmailField({ field }) {
  const {
    id,
    formId,
    type,
    label,
    description,
    cssClass,
    isRequired,
    placeholder,
    size,
  } = field
  const htmlId = `field_${formId}_${id}`
  const [emailValue, setEmailValue] = useState("")
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  // function validateField(value) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let emailValid = this.state.emailValid;

  //   emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //   fieldValidationErrors.email = emailValid ? '' : ' is invalid';
  // }

  const handleChange = event => {
    const { value } = event.target
    setEmailValue(value)
    const newEmailValue = value
    return updateFormState(field, newEmailValue, dispatch)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="email"
        name={id}
        id={htmlId}
        placeholder={placeholder}
        required={isRequired}
        value={emailValue}
        onChange={handleChange}
      />
    </div>
  )
}
