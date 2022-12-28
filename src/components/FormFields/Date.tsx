import React, { useEffect } from "react"
import { format, parseISO } from "date-fns"

import { useFormContext, ActionTypes } from "../../formContext"
import { DateFieldProps } from "../../interfaces"

const DateField: React.FC<DateFieldProps> = props => {
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
  } = field
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
    // const validationRegex =
    //   validationRule?.regex != null
    //     ? validationRule.regex
    //     : /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19|20)\\d\\d)$/

    // const validationMessage =
    //   validationRule?.message != null
    //     ? validationRule.message
    //     : "Please enter valid characters."

    if ((isRequired ?? false) && value.length === 0) {
      return dispatch({
        type: ActionTypes.AddError,
        payload: { name: valueId, message: "Field cannot be empty" },
      })
    }
    // if (!validationRegex.test(value)) {
    //   return dispatch({
    //     type: ActionTypes.AddError,
    //     payload: { name: valueId, message: validationMessage },
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
    const parsedValue = parseISO(value)
    const formattedValue = format(parsedValue, "MM/dd/yyyy")

    return dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: formattedValue },
    })
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
        type="date"
        name={htmlId}
        id={htmlId}
        required={isRequired}
        placeholder={placeholderValue}
        onChange={handleChange}
      />
      <p className="error-message">{errorMessage?.message}</p>
    </div>
  )
}

export default DateField
