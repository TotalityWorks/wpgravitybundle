import React, { useEffect } from "react"

// import components
import { useFormContext, ActionTypes } from "../formContext"
import FormsField from "./FormsField"
import Button from "./Button"
import { supportedFields } from "../constants"

// import types
import type { Form, ValidationRule } from "../interfaces"

interface GravityFormData {
  form: Form
  onSubmit: Function
  buttonClass?: string
  validation?: ValidationRule[]
}

const FormComponent: React.FC<GravityFormData> = props => {
  const { form, buttonClass, onSubmit, validation } = props
  const fields = form.formFields.nodes
  const button = form.button
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

        if (!(field.isRequired ?? false)) return null
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
            <FormsField
              key={`${field.id}-${field.type}`}
              field={field}
              validation={validation}
            />
          ))}

        {Boolean(button) && (
          <Button
            type={button.type}
            text={button.text}
            cssClass={buttonClass}
            onClick={handleSubmit}
          />
        )}
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default FormComponent
