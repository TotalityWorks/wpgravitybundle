import React, { lazy } from "react"

// import types
import {
  Field,
  AddressField,
  ConsentField,
  EmailField,
  NameField,
  NumberField,
  PhoneField,
  SelectField,
  TextField,
  TextAreaField,
  WebsiteField,
  ValidationRule,
} from "../interfaces"

// import components
const Address = lazy(async () => await import("./FormFields/Address"))
const Consent = lazy(async () => await import("./FormFields/Consent"))
const Email = lazy(async () => await import("./FormFields/Email"))
const Name = lazy(async () => await import("./FormFields/Name"))
const Number = lazy(async () => await import("./FormFields/Number"))
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
    case "ADDRESS":
      return <Address field={field as AddressField} />
    case "CONSENT":
      return <Consent field={field as ConsentField} />
    case "EMAIL":
      return <Email field={field as EmailField} validationRules={validation} />
    case "NAME":
      return <Name field={field as NameField} validationRules={validation} />
    case "NUMBER":
      return (
        <Number field={field as NumberField} validationRules={validation} />
      )
    case "PHONE":
      return <Phone field={field as PhoneField} validationRules={validation} />
    case "SELECT":
      return <Select field={field as SelectField} />
    case "TEXT":
      return <Text field={field as TextField} validationRules={validation} />
    case "TEXTAREA":
      return (
        <TextArea field={field as TextAreaField} validationRules={validation} />
      )
    case "WEBSITE":
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
