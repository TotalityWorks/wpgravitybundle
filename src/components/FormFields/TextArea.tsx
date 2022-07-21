import React, { useState } from "react"
import { z } from "zod"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function TextAreaField(props: any) {
  const { field } = props
  const { id, formId, label, cssClass, isRequired, placeholder, size } = field
  const htmlId = `field_${formId}_${id}`
  const [textAreaValue, setTextAreaValue] = useState("")
  const [validateTextArea, setValidateTextArea] = useState<{
    success?: any
    error?: any
  }>({})
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  const requiredTextAreaSchema =
    isRequired && z.string().min(1, { message: "Can't be empty" })
  const textAreaSchema = requiredTextAreaSchema || z.string()

  const handleChange = (event: any) => {
    const { value } = event.target
    setTextAreaValue(value)
    const newTextAreaValue = value
    const validatedValue = textAreaSchema.safeParse(value)
    setValidateTextArea(validatedValue)
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
      {validateTextArea && validateTextArea.error && (
        <p className="error-message">
          {validateTextArea.error.issues[0].message}
        </p>
      )}
    </div>
  )
}
