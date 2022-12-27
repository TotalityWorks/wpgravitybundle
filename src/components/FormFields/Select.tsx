import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { SelectFieldProps } from "../../interfaces"

const SelectField: React.FC<SelectFieldProps> = props => {
  const { field } = props
  const {
    id,
    type,
    label,
    cssClass,
    isRequired,
    defaultValue,
    choices,
    size,
    pageNumber,
  } = field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${id}`
  const sizeClass = size === undefined ? "" : `${size.toLowerCase()}`
  const otherClasses = cssClass === undefined ? "" : `${cssClass}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes = `${sizeClass} ${otherClasses}`
  const { state, dispatch } = useFormContext()
  const [selectValue, setSelectValue] = useState("")

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  useEffect(() => {
    // defaultValue could be undefined if not included in the query
    // defaultValue could be null if not provided
    if (defaultValue === undefined || defaultValue === null) {
      setSelectValue(choices[0].value)
      return dispatch({
        type: ActionTypes.Update,
        payload: { [valueId]: choices[0].value },
      })
    }

    setSelectValue(defaultValue)
    dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: defaultValue },
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
    <div className={classes} style={{ display: activePageStyle }}>
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
