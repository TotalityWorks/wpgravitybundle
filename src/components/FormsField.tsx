import React, { lazy } from "react"

// import types
import { Field, TextField, TextAreaField, ValidationRule } from "../interfaces"

// import components
const Text = lazy(async () => await import("./FormFields/Text"))
const TextArea = lazy(async () => await import("./FormFields/TextArea"))

const FormsField: React.FC<{
  field: Field
  validation?: ValidationRule[]
}> = props => {
  const { field, validation } = props
  switch (field.type) {
    case "text":
      return <Text field={field as TextField} validationRules={validation} />
    case "textarea":
      return (
        <TextArea field={field as TextAreaField} validationRules={validation} />
      )
    default:
      return (
        <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>
      )
  }
}

export default FormsField
