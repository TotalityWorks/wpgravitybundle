import React from "react"
import FormComponent from "./Form"

import { FormProvider } from "../formContext"
import type { Form, ValidationRule } from "../interfaces"

interface GravityFormData {
  form: Form
  onSubmit: Function
  buttonClass?: string
  validation?: ValidationRule[]
  captcha?: {
    captchaSiteKey: string
    captchaSecretKey: string
    type: string
  }
}

const GravityForm: React.FC<GravityFormData> = props => {
  const { form, buttonClass, onSubmit, validation, captcha } = props

  return (
    <FormProvider>
      <FormComponent
        form={form}
        onSubmit={onSubmit}
        buttonClass={buttonClass}
        validation={validation}
        captcha={captcha}
      />
    </FormProvider>
  )
}

export default GravityForm
