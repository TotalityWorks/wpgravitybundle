import React from "react"

// import types
import {
  Field,
  AddressField,
  CaptchaField,
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
import Address from "./FormFields/Address"
import Captcha from "./FormFields/Captcha"
import Consent from "./FormFields/Consent"
import Date from "./FormFields/Date"
import Email from "./FormFields/Email"
import FileUpload from "./FormFields/FileUpload"
import Hidden from "./FormFields/Hidden"
import HTML from "./FormFields/HTML"
import Name from "./FormFields/Name"
import Number from "./FormFields/Number"
import Page from "./FormFields/Page"
import Phone from "./FormFields/Phone"
import Radio from "./FormFields/Radio"
import Section from "./FormFields/Section"
import Select from "./FormFields/Select"
import Text from "./FormFields/Text"
import TextArea from "./FormFields/TextArea"
import Website from "./FormFields/Website"

const FormsField: React.FC<{
  field: Field
  validation?: ValidationRule[]
  captcha?: {
    captchaSiteKey: string
    captchaSecretKey: string
    type: "COMPACT" | "NORMAL" | "INVISIBLE"
  }
  parser?: Function
}> = props => {
  const { field, validation, captcha, parser } = props
  const definedParser = parser != null ? parser : () => {}

  switch (field.type) {
    case "ADDRESS":
      return <Address field={field as AddressField} />
    case "CAPTCHA":
      return <Captcha field={field as CaptchaField} captcha={captcha} />
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
      return <HTML field={field as HTMLField} parser={definedParser} />
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
