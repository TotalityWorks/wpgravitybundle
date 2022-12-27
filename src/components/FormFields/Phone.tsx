import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { PhoneFieldProps } from "../../interfaces"

const PhoneField: React.FC<PhoneFieldProps> = props => {
  const {
    field,
    // validationRules
  } = props
  const {
    id,
    type,
    label,
    cssClass,
    isRequired,
    placeholder,
    size,
    pageNumber,
    // phoneFormat,
  } = field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${id}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  // const format =
  //   phoneFormat === undefined || phoneFormat === null
  //     ? ""
  //     : `${phoneFormat.toLowerCase()}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const placeholderValue =
    placeholder === undefined || placeholder === null
      ? ""
      : `${placeholder.toLowerCase()}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes = `${sizeClass} ${otherClasses}`
  const { state, dispatch } = useFormContext()
  // const validationRule = validationRules?.find(rule => rule.id === id)

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  function validateField(value: string): void {
    // const neededLength = format === "standard" ? 10 : 13
    // const validation =
    //   validationRule != null
    //     ? validationRule.regex
    //     : format === "standard"
    //     ? /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    //     : format === "international"
    //     ? /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    //     : /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

    if ((isRequired ?? false) && value.length === 0) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: "Field cannot be empty" },
      })
    }
    // if (value.length < neededLength) {
    //   return dispatch({
    //     type: ActionTypes.AddError,
    //     payload: {
    //       name: valueId,
    //       message: `Phone should be ${neededLength} characters`,
    //     },
    //   })
    // }
    // if (!validation.test(value)) {
    //   return dispatch({
    //     type: ActionTypes.AddError,
    //     payload: { name: valueId, message: "Invalid characters." },
    //   })
    // }
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
    <div className={classes} style={{ display: activePageStyle }}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="text"
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

export default PhoneField
