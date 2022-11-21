import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { TextFieldProps } from "../../interfaces"

const TextField: React.FC<TextFieldProps> = props => {
  const { field } = props
  const { id, type, formId, label, cssClass, isRequired, placeholder, size } =
    field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${formId}_${id}`
  const sizeClass = size === undefined ? "" : `${size.toLowerCase()}`
  const placeholderValue =
    placeholder === undefined ? "" : `${placeholder.toLowerCase()}`
  const classes = `${sizeClass} ${cssClass}`.trim()
  const { state, dispatch } = useFormContext()

  // handle field verification
  // handle field requirement

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const { value } = event.currentTarget
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
      <input
        type="text"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholderValue}
        defaultValue={state.formData?.[valueId]}
        onChange={handleChange}
      />
      {/* {validateText && validateText.error && (
        <p className="error-message">{validateText.error.issues[0].message}</p>
      )} */}
    </div>
  )
}

export default TextField
