import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { WebsiteFieldProps } from "../../interfaces"

const WebsiteField: React.FC<WebsiteFieldProps> = props => {
  const { field, validationRules } = props
  const {
    databaseId,
    type,
    label,
    cssClass,
    isRequired,
    placeholder,
    size,
    pageNumber,
  } = field
  const valueId = `${type}${databaseId}Value`
  const htmlId = `field_${databaseId}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const placeholderValue =
    placeholder === undefined || placeholder === null ? "" : `${placeholder}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes = `${sizeClass} ${otherClasses}`
  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === databaseId)

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

  function validateField(value: string): void {
    const validationRegex =
      validationRule?.regex != null
        ? validationRule.regex
        : /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)+/g
    const validationMessage =
      validationRule?.message != null
        ? validationRule.message
        : "Please enter a valid web address starting with https://."

    if ((isRequired ?? false) && value.length === 0) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: "Field cannot be empty" },
      })
    }
    if (!validationRegex.test(value)) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: {
          name: valueId,
          message: validationMessage,
        },
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
    <div style={{ display: activePageStyle }}>
      <label htmlFor={htmlId}>
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
      </label>
      <input
        type="text"
        name={htmlId}
        id={htmlId}
        required={isRequired}
        placeholder={placeholderValue}
        onChange={handleChange}
        className={classes}
      />
      <p className="error-message">{errorMessage?.message}</p>
    </div>
  )
}

export default WebsiteField
