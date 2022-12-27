import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { NumberFieldProps } from "../../interfaces"

const NumberField: React.FC<NumberFieldProps> = props => {
  const { field, validationRules } = props
  const { id, type, label, cssClass, isRequired, placeholder, size } = field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${id}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const placeholderValue =
    placeholder === undefined || placeholder === null
      ? ""
      : `${placeholder.toLowerCase()}`
  const classes = `${sizeClass} ${otherClasses}`
  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === id)

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  function validateField(value: string): void {
    const validationRegex =
      validationRule?.regex != null ? validationRule.regex : /[0-9]+/g
    const validationMessage =
      validationRule?.message != null
        ? validationRule.message
        : "Please enter valid characters."

    if ((isRequired ?? false) && value.length === 0) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: "Field cannot be empty" },
      })
    }
    if (!validationRegex.test(value)) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: validationMessage },
      })
    }
    return dispatch({
      type: ActionTypes.RemoveError,
      payload: valueId,
    })
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const { value } = event.currentTarget
    validateField(value)
    return dispatch({ type: ActionTypes.Update, payload: { [valueId]: value } })
  }

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[valueId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="number"
        name={htmlId}
        id={htmlId}
        required={isRequired}
        placeholder={placeholderValue}
        defaultValue={state.formData?.[valueId]}
        onChange={handleChange}
      />
      <p className="error-message">{errorMessage?.message}</p>
    </div>
  )
}

export default NumberField
