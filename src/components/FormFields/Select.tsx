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
  const valueId = `${type}${id}Value`
  const htmlId = `field_${formId}_${id}`
  const sizeClass = size === undefined ? "" : `${size.toLowerCase()}`
  const otherClasses = cssClass === undefined ? "" : `${cssClass}`
  const classes = `${sizeClass} ${otherClasses}`
  const selectedDefault =
    defaultValue === null ? choices[0].value : defaultValue
  const { state, dispatch } = useFormContext()
  const [selectValue, setSelectValue] = useState(selectedDefault)

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  useEffect(() => {
    dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: selectedDefault },
    })
  }, [])

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
