import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { TextAreaFieldProps } from "../../interfaces"

const TextAreaField: React.FC<TextAreaFieldProps> = props => {
  const { field, validationRules } = props
  const { id, type, formId, label, cssClass, isRequired, placeholder, size } =
    field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${formId}_${id}`
  const sizeClass = size === undefined ? "" : `${size.toLowerCase()}`
  const placeholderValue =
    placeholder === undefined ? "" : `${placeholder.toLowerCase()}`
  const classes = `${sizeClass} ${cssClass}`.trim()
  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === id)

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  function validateField(value: string): void {
    const validation =
      validationRule != null ? validationRule.regex : /[a-z][A-Z][0-9]+/g

    if (isRequired && value.length === 0) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: "Field cannot be empty" },
      })
    }
    if (validation.test(value)) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: "Invalid characters." },
      })
    }
    return dispatch({
      type: ActionTypes.RemoveError,
      payload: valueId,
    })
  }

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    event.preventDefault()
    const { value } = event.currentTarget
    validateField(value)
    return dispatch({ type: ActionTypes.Update, payload: { [valueId]: value } })
  }

  useEffect(() => {
    if (!isRequired) return undefined
    if (state.formData?.[valueId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <textarea
        name={htmlId}
        id={htmlId}
        required={isRequired}
        onChange={handleChange}
        placeholder={placeholderValue}
        defaultValue={state.formData?.[valueId]}
      />
      <p className="error-message">{errorMessage?.message}</p>
    </div>
  )
}

export default TextAreaField
