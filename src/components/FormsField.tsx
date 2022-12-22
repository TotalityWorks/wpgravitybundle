import React, { lazy } from "react"

// import types
import {
  Field,
  ConsentField,
  EmailField,
  PhoneField,
  SelectField,
  TextField,
  TextAreaField,
  WebsiteField,
  ValidationRule,
} from "../interfaces"

// import components
const Consent = lazy(async () => await import("./FormFields/Consent"))
const Email = lazy(async () => await import("./FormFields/Email"))
const Phone = lazy(async () => await import("./FormFields/Phone"))
const Select = lazy(async () => await import("./FormFields/Select"))
const Text = lazy(async () => await import("./FormFields/Text"))
const TextArea = lazy(async () => await import("./FormFields/TextArea"))
const Website = lazy(async () => await import("./FormFields/Website"))

const FormsField: React.FC<{
  field: Field
  validation?: ValidationRule[]
}> = props => {
  const { field, validation } = props
  switch (field.type) {
    case "consent":
      return <Consent field={field as ConsentField} />
    case "email":
      return <Email field={field as EmailField} validationRules={validation} />
    case "phone":
      return <Phone field={field as PhoneField} validationRules={validation} />
    case "select":
      return <Select field={field as SelectField} />
    case "text":
      return <Text field={field as TextField} validationRules={validation} />
    case "textarea":
      return (
        <TextArea field={field as TextAreaField} validationRules={validation} />
      )
    case "website":
      return (
        <Website field={field as WebsiteField} validationRules={validation} />
      )
    default:
      return (
        <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>
      )
  }
}

export default FormsField
