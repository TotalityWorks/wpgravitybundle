import React from "react"
import FormComponent from "./Form"

import { FormProvider } from "../formContext"
import type { Form } from "../interfaces"

interface GravityFormData {
  form: Form
  onSubmit: Function
  buttonClass?: string
}

const GravityForm: React.FC<GravityFormData> = props => {
  const { form, buttonClass, onSubmit } = props

  return (
    <FormProvider>
      <FormComponent
        form={form}
        onSubmit={onSubmit}
        buttonClass={buttonClass}
      />
    </FormProvider>
  )
}

export default GravityForm
