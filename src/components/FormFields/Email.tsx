import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { EmailFieldProps } from "../../interfaces"

const EmailField: React.FC<EmailFieldProps> = props => {
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
    hasEmailConfirmation,
  } = field
  const valueId = `${type}${databaseId}Value`
  const confirmationValueId = `${type}${databaseId}ConfirmationValue`
  const htmlId = `field_${databaseId}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const placeholderValue =
    placeholder === undefined || placeholder === null ? "" : `${placeholder}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes = `${sizeClass} ${otherClasses}`
  const emailConfirmed =
    hasEmailConfirmation !== null && Boolean(hasEmailConfirmation)

  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === databaseId)

  const confirmMessage =
    validationRule?.confirmMessage != null
      ? validationRule.confirmMessage
      : "Email does not match"

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  const confirmationErrorMessage = state.errors.find(error => {
    return error.name.toString() === confirmationValueId
  })

  function validateField(name: string, value: string): void {
    if (name === `${htmlId}_confirm`) {
      if (state.formData?.[valueId] !== value) {
        return dispatch({
          type: ActionTypes.AddError,
          payload: {
            name: confirmationValueId,
            message: confirmMessage,
          },
        })
      }

      return dispatch({
        type: ActionTypes.RemoveError,
        payload: confirmationValueId,
      })
    }

    const validationRegex =
      validationRule?.regex != null
        ? validationRule.regex
        : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    const validationMessage =
      validationRule?.message != null
        ? validationRule.message
        : "Please enter a valid email address."

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
    const { name, value } = event.currentTarget
    validateField(name, value)
    if (name === `${htmlId}_confirm`) {
      return dispatch({
        type: ActionTypes.Update,
        payload: { [confirmationValueId]: value },
      })
    }
    return dispatch({ type: ActionTypes.Update, payload: { [valueId]: value } })
  }

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[valueId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  useEffect(() => {
    if (!emailConfirmed) return undefined
    if (state.formData?.[valueId] !== state.formData?.[confirmationValueId]) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: {
          name: confirmationValueId,
          message: confirmMessage,
        },
      })
    }
  }, [state.formData?.[valueId], state.formData?.[confirmationValueId]])

  return (
    <>
      <div style={{ display: activePageStyle }}>
        <label htmlFor={htmlId}>{label}</label>
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

      {emailConfirmed && (
        <div style={{ display: activePageStyle }}>
          {/* Investigate using sub-labels for email/confirm email */}
          <label htmlFor={`${htmlId}_confirm`}>{`Confirm Email`}</label>
          <input
            type="text"
            name={`${htmlId}_confirm`}
            id={`${htmlId}_confirm`}
            required={isRequired}
            placeholder={placeholderValue}
            onChange={handleChange}
            className={classes}
          />
          <p className="error-message">{confirmationErrorMessage?.message}</p>
        </div>
      )}
    </>
  )
}

export default EmailField
