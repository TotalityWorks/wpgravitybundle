import React, { lazy } from "react"

// import types
import {
  Field,
  AddressField,
  ConsentField,
  DateField,
  EmailField,
  FileUploadField,
  HiddenField,
  HTMLField,
  NameField,
  NumberField,
  PageField,
  PhoneField,
  RadioField,
  SectionField,
  SelectField,
  TextField,
  TextAreaField,
  WebsiteField,
  ValidationRule,
} from "../interfaces"

// import components
const Address = lazy(async () => await import("./FormFields/Address"))
const Consent = lazy(async () => await import("./FormFields/Consent"))
const Date = lazy(async () => await import("./FormFields/Date"))
const Email = lazy(async () => await import("./FormFields/Email"))
const FileUpload = lazy(async () => await import("./FormFields/FileUpload"))
const Hidden = lazy(async () => await import("./FormFields/Hidden"))
const HTML = lazy(async () => await import("./FormFields/HTML"))
const Name = lazy(async () => await import("./FormFields/Name"))
const Number = lazy(async () => await import("./FormFields/Number"))
const Page = lazy(async () => await import("./FormFields/Page"))
const Phone = lazy(async () => await import("./FormFields/Phone"))
const Radio = lazy(async () => await import("./FormFields/Radio"))
const Section = lazy(async () => await import("./FormFields/Section"))
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
    case "DATE":
      return <Date field={field as DateField} validationRules={validation} />
    case "EMAIL":
      return <Email field={field as EmailField} validationRules={validation} />
    case "FILEUPLOAD":
      return (
        <FileUpload
          field={field as FileUploadField}
          validationRules={validation}
        />
      )
    case "HIDDEN":
      return <Hidden field={field as HiddenField} />
    case "HTML":
      return <HTML field={field as HTMLField} />
    case "NAME":
      return <Name field={field as NameField} validationRules={validation} />
    case "NUMBER":
      return (
        <Number field={field as NumberField} validationRules={validation} />
      )
    case "PAGE":
      return <Page field={field as PageField} />
    case "PHONE":
      return <Phone field={field as PhoneField} validationRules={validation} />
    case "RADIO":
      return <Radio field={field as RadioField} />
    case "SECTION":
      return <Section field={field as SectionField} />
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
        <>
          {console.log(
            `This Gravity Forms field type is not currently supported: ${field.type}.`
          )}
        </>
      )
  }
}

export default FormsField
