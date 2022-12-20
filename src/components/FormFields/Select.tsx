import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { SelectFieldProps } from "../../interfaces"

const SelectField: React.FC<SelectFieldProps> = props => {
  const { field } = props
  const {
    id,
    type,
    formId,
    label,
    cssClass,
    isRequired,
    defaultValue,
    choices,
    size,
  } = field
  const [selectValue, setSelectValue] = useState(defaultValue)
  const valueId = `${type}${id}Value`
  const htmlId = `field_${formId}_${id}`
  const sizeClass = size === undefined ? "" : `${size.toLowerCase()}`
  const otherClasses = cssClass === undefined ? "" : `${cssClass}`
  const classes = `${sizeClass} ${otherClasses}`
  const { state, dispatch } = useFormContext()

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  useEffect(() => {
    dispatch({ type: ActionTypes.Update, payload: { [valueId]: defaultValue } })
  }, [])

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[valueId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  const handleChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    const { value } = event.currentTarget
    setSelectValue(value)
    const newSelectValue = value
    return dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: newSelectValue },
    })
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <select
        name={htmlId}
        id={htmlId}
        required={isRequired != null || false}
        value={selectValue}
        onChange={handleChange}
      >
        {choices?.map(choice => (
          <option key={choice.value} value={choice.value}>
            {choice.text}
          </option>
        ))}
      </select>
      <p className="error-message">{errorMessage?.message}</p>
    </div>
  )
}

export default SelectField
