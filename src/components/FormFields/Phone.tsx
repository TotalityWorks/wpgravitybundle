import React, { useState } from "react"
import { z } from "zod"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function PhoneField(props: any) {
  const { field } = props
  const {
    id,
    formId,
    label,
    cssClass,
    isRequired,
    placeholder,
    // phoneFormat,
    size,
    // phoneFormat is either "STANDARD" or "INTERNATIONAL"
    // does not matter for return value, but does for field validation
  } = field
  const htmlId = `field_${formId}_${id}`
  const [phoneValue, setPhoneValue] = useState("")
  const [validatePhone, setValidatePhone] = useState<{
    success?: any
    error?: any
  }>({})
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  const phoneNumberRegex =
    /^\+?(\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  // The following phone number inputs would be valid:
  // +(111)-222-3333
  // 1112223333
  // +11112223333
  // +1 (111)222-3333
  // +12 (111)-222-3333
  // +123 (111)-222-3333
  // (111)-222-3333
  // 111-222-3333

  const phoneSchema = z.string().regex(phoneNumberRegex)

  const handleChange = (event: any) => {
    const { value } = event.target
    setPhoneValue(value)
    const newPhoneValue = value
    // check for empty field, and if not required it should not be parsed
    if ((value === "" || null) && !isRequired) {
      // zod would give an error if an empty string is parsed
      // so in this case we will reset state to avoid the error message.
      setValidatePhone({})
      return updateFormState(field, newPhoneValue, dispatch)
    }
    const validatedValue = phoneSchema.safeParse(value)
    setValidatePhone(validatedValue)
    return updateFormState(field, newPhoneValue, dispatch)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="tel"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ""}
        value={phoneValue}
        onChange={handleChange}
      />
      {validatePhone && validatePhone.error && (
        <p className="error-message">{validatePhone.error.issues[0].message}</p>
      )}
    </div>
  )
}
