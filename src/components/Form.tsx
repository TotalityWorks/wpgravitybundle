import React from "react"

import { useFormContext } from "../formContext"
import FormsField from "./FormsField"
import { Field } from "../interfaces"

interface GravityFormData {
  form: {
    formFields: {
      nodes: Field[]
    }
  }
  onSubmit: Function
}

const Form: React.FC<GravityFormData> = props => {
  const { form, onSubmit } = props
  const fields = form.formFields.nodes
  const { state } = useFormContext()

  const handleSubmit = (e: React.SyntheticEvent): Function => {
    e.preventDefault()
    const values = state.formData
    return onSubmit(values)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {Boolean(fields) &&
          fields.map(field => (
            <FormsField key={`${field.id}-${field.type}`} field={field} />
          ))}
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default Form
