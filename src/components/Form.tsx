import React, { useEffect } from "react"

// import components
import { useFormContext, ActionTypes } from "../formContext"
import FormsField from "./FormsField"
import { supportedFields } from "../constants"

// import types
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
  const { state, dispatch } = useFormContext()

  const handleSubmit = (e: React.SyntheticEvent): Function => {
    e.preventDefault()
    const values = state.formData
    return onSubmit(values)
  }

  useEffect(() => {
    const allSupportedFields = fields.filter(field =>
      supportedFields.includes(field.type)
    )
    const requiredFields = allSupportedFields
      .map(field => {
        const valueId = `${field.type}${field.id}Value`

        if (field.isRequired === false) return null
        return valueId
      })
      .filter(field => field !== null)
    dispatch({ type: ActionTypes.AddRequired, payload: requiredFields })
  }, [])

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
