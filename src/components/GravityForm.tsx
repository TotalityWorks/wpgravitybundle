import React from "react"
import Form from "./Form"

import { FormProvider } from "../formContext"

interface GravityFormData {
  form: any
  onSubmit: any
}

const GravityForm: React.FC<GravityFormData> = props => {
  const { form, onSubmit } = props

  return (
    <FormProvider>
      <Form form={form} onSubmit={onSubmit} />
    </FormProvider>
  )
}

export default GravityForm
