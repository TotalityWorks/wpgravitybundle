import React from "react"
import FormComponent from "./Form"

import { FormProvider } from "../formContext"
import type { Form, ValidationRule } from "../interfaces"

interface GravityFormData {
  form: Form
  onSubmit: Function
  buttonClass?: string
  validation?: ValidationRule[]
}

const GravityForm: React.FC<GravityFormData> = props => {
  const { form, buttonClass, onSubmit, validation } = props

  return (
    <FormProvider>
      <FormComponent
        form={form}
        onSubmit={onSubmit}
        buttonClass={buttonClass}
        validation={validation}
      />
    </FormProvider>
  )
}

export default GravityForm
