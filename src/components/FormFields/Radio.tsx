import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { RadioFieldProps } from "../../interfaces"

const RadioField: React.FC<RadioFieldProps> = props => {
  const { field } = props
  const {
    databaseId,
    type,
    label,
    cssClass,
    isRequired,
    choices,
    size,
    pageNumber,
  } = field
  const valueId = `${type}${databaseId}Value`
  const htmlId = `field_${databaseId}`
  const sizeClass = size === undefined ? "" : `${size.toLowerCase()}`
  const otherClasses = cssClass === undefined ? "" : `${cssClass}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes = `${sizeClass} ${otherClasses}`
  const { state, dispatch } = useFormContext()
  const [radioValue, setRadioValue] = useState("")

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"
  const { requiredIndicator, customRequiredIndicator, indicatorClass } = state
  const nonNullIndicatorClass =
    indicatorClass === undefined || indicatorClass === null
      ? ""
      : `${indicatorClass}`

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  useEffect(() => {
    choices.forEach(input => {
      if (input.isSelected) {
        setRadioValue(input.value)

        return dispatch({
          type: ActionTypes.Update,
          payload: { [valueId]: input.value },
        })
      }
    })
  }, [])

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[valueId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setRadioValue(value)
    const newSelectValue = value
    return dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: newSelectValue },
    })
  }

  return (
    <fieldset
      id={htmlId}
      className={classes}
      style={{ display: activePageStyle }}
    >
      <legend>
        {label}
        {Boolean(isRequired) && (
          <span className={nonNullIndicatorClass}>
            {requiredIndicator === "TEXT"
              ? " Required"
              : requiredIndicator === "ASTERISK"
              ? "*"
              : customRequiredIndicator === null
              ? " Required"
              : ` ${customRequiredIndicator}`}
          </span>
        )}
      </legend>
      {choices?.map(input => {
        const text = input?.text
        const inputValue = input?.value
        return (
          <div key={inputValue}>
            <input
              type="radio"
              name={String(databaseId)}
              id={`choice_${htmlId}_${inputValue}`}
              value={inputValue}
              onChange={handleChange}
              checked={radioValue === inputValue}
            />
            <label htmlFor={`choice_${htmlId}_${inputValue}`}>{text}</label>
          </div>
        )
      })}
      <p className="error-message">{errorMessage?.message}</p>
    </fieldset>
  )
}

export default RadioField
