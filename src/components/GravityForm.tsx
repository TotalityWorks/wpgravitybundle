/* eslint-disable react/prop-types */
import React from "react"
import Form from "./Form"

import { FormProvider } from "../formContext"

interface GravityFormData {
  form: any
  buttonClass: any
  onSubmit: any
}

function GravityForm(props: GravityFormData) {
  const { form, buttonClass, onSubmit } = props
  return (
    <FormProvider>
      <Form form={form} buttonClass={buttonClass} onSubmit={onSubmit} />
    </FormProvider>
  )
}

export default GravityForm
