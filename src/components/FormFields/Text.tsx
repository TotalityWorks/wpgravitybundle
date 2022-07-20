import React, { useState } from "react"
import { z } from "zod"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function TextField(props: any) {
  const { field } = props
  const { id, formId, label, cssClass, isRequired, placeholder, size } = field
  const htmlId = `field_${formId}_${id}`
  const [textValue, setTextValue] = useState("")
  const [validateText, setValidateText] = useState<{
    success?: any
    error?: any
  }>({})
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  const requiredTextSchema =
    isRequired && z.string().min(1, { message: "Can't be empty" })
  const textSchema = requiredTextSchema || z.string()

  const handleChange = (event: any) => {
    const { value } = event.target
    setTextValue(value)
    const validatedValue = textSchema.safeParse(value)
    setValidateText(validatedValue)
    const newTextValue = value
    return updateFormState(field, newTextValue, dispatch)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="text"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ""}
        value={textValue}
        onChange={handleChange}
      />
      {validateText && validateText.error && (
        <p className="error-message">{validateText.error.issues[0].message}</p>
      )}
    </div>
  )
}
