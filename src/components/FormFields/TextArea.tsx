import React, { useState } from "react"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function TextAreaField(props: any) {
  const { field } = props
  const { id, formId, label, cssClass, isRequired, placeholder, size } = field
  const htmlId = `field_${formId}_${id}`
  const [textAreaValue, setTextAreaValue] = useState("")
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  const handleChange = (event: any) => {
    const { value } = event.target
    setTextAreaValue(value)
    const newTextAreaValue = value
    return updateFormState(field, newTextAreaValue, dispatch)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <textarea
        name={id}
        id={htmlId}
        required={isRequired}
        value={textAreaValue}
        onChange={handleChange}
        placeholder={placeholder || ""}
      />
    </div>
  )
}
