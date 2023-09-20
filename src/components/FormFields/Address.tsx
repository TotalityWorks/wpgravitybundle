import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { AddressFieldProps } from "../../interfaces"
import { countries } from "../../constants"

interface AddressValue {
  [key: string]: string
}

const AddressField: React.FC<AddressFieldProps> = props => {
  const { field, validationRules } = props
  const {
    databaseId,
    type,
    label,
    cssClass,
    inputs,
    size,
    isRequired,
    pageNumber,
  } = field
  const valueId = `${type}${databaseId}Value`
  const htmlId = `field_${databaseId}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const classes = `${sizeClass} ${otherClasses}`
  const [addressValue, setAddressValue] = useState<AddressValue>({})
  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === databaseId)
  const streetId = `${type}${databaseId}StreetValue`
  const lineTwoId = `${type}${databaseId}LineTwoValue`
  const cityId = `${type}${databaseId}CityValue`
  const stateId = `${type}${databaseId}StateValue`
  const zipId = `${type}${databaseId}ZipValue`
  const countryId = `${type}${databaseId}CountryValue`
  const valudIds = [streetId, lineTwoId, cityId, stateId, zipId, countryId]

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"
  const { requiredIndicator, customRequiredIndicator, indicatorClass } = state
  const nonNullIndicatorClass =
    indicatorClass === undefined || indicatorClass === null
      ? ""
      : `${indicatorClass}`

  const streetErrorMessage = state.errors.find(error => {
    return error.name.toString() === streetId
  })
  const lineTwoErrorMessage = state.errors.find(error => {
    return error.name.toString() === lineTwoId
  })
  const cityErrorMessage = state.errors.find(error => {
    return error.name.toString() === cityId
  })
  const stateErrorMessage = state.errors.find(error => {
    return error.name.toString() === stateId
  })
  const zipErrorMessage = state.errors.find(error => {
    return error.name.toString() === zipId
  })
  const countyErrorMessage = state.errors.find(error => {
    return error.name.toString() === countryId
  })

  const errorMessages = [
    streetErrorMessage,
    lineTwoErrorMessage,
    cityErrorMessage,
    stateErrorMessage,
    zipErrorMessage,
    countyErrorMessage,
  ]

  function validateField(values: { [key: string]: string }): void {
    const validationRegex =
      validationRule?.regex != null
        ? validationRule.regex
        : /[a-zA-Z0-9 !#$%&'*+/=?^_`{|}~-]/

    const validationMessage =
      validationRule?.message != null
        ? validationRule.message
        : "Please enter valid characters."

    valudIds.map(id => {
      if ((isRequired ?? false) && values?.[id].length === 0) {
        return dispatch({
          type: ActionTypes.AddError,
          payload: { name: id, message: "Field cannot be empty" },
        })
      }
      if (!validationRegex.test(values?.[id])) {
        if (values?.[id].length === 0) return null
        return dispatch({
          type: ActionTypes.AddError,
          payload: { name: id, message: validationMessage },
        })
      }
      return dispatch({
        type: ActionTypes.RemoveError,
        payload: valueId,
      })
    })
  }

  function formatValuesForState(value: { [key: string]: string }): {} {
    const { street, lineTwo, city, state, zip, country } = value
    const values = {
      [streetId]: street,
      [lineTwoId]: lineTwo,
      [cityId]: city,
      [stateId]: state,
      [zipId]: zip,
      [countryId]: country,
    }

    return values
  }

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    event.preventDefault()
    const { name, value } = event.currentTarget
    const newAddressValue = { ...addressValue, [name]: value }
    const formattedValue = formatValuesForState(newAddressValue)
    validateField(formattedValue)
    setAddressValue({ ...addressValue, [name]: value })
    return dispatch({
      type: ActionTypes.Update,
      payload: formattedValue,
    })
  }

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[streetId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: streetId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: streetId })
  }, [state.formData?.[streetId]])

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[cityId]?.length === 0) {
      return dispatch({
        type: ActionTypes.AddRequiredField,
        payload: cityId,
      })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: cityId })
  }, [state.formData?.[cityId]])

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[stateId]?.length === 0) {
      return dispatch({
        type: ActionTypes.AddRequiredField,
        payload: stateId,
      })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: stateId })
  }, [state.formData?.[stateId]])

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[zipId]?.length === 0) {
      return dispatch({
        type: ActionTypes.AddRequiredField,
        payload: zipId,
      })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: zipId })
  }, [state.formData?.[zipId]])

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[countryId]?.length === 0) {
      return dispatch({
        type: ActionTypes.AddRequiredField,
        payload: countryId,
      })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: countryId })
  }, [state.formData?.[countryId]])

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
      {inputs?.map(input => {
        const key = String(input?.key)
        const inputLabel = input?.label
        const placeholder = input?.placeholder
        const fieldValueId = `${key}Id`

        if (key.toLowerCase() === "country") {
          return (
            <React.Fragment key={fieldValueId}>
              <select
                name={String(key)}
                id={`input_${databaseId}_${key}`}
                defaultValue={String(state.formData?.[fieldValueId])}
                onChange={handleChange}
              >
                <option value=""></option>
                {countries.map(choice => (
                  <option key={choice.value} value={String(choice.value)}>
                    {String(choice.text)}
                  </option>
                ))}
              </select>
              <label htmlFor={`input_${databaseId}_${key}`}>{inputLabel}</label>
            </React.Fragment>
          )
        }
        return (
          <>
            <div key={fieldValueId}>
              <input
                type="text"
                name={String(key)}
                id={`input_${databaseId}_${key}`}
                placeholder={placeholder}
                onChange={handleChange}
              />
              <label htmlFor={`input_${databaseId}_${key}`}>{inputLabel}</label>
            </div>

            {errorMessages.map(err => {
              if (err?.name?.toLowerCase().includes(key.toLowerCase()) ?? false)
                return (
                  <p className="error-message" key={err?.name}>
                    {err?.message}
                  </p>
                )
              return <React.Fragment key={key}></React.Fragment>
            })}
          </>
        )
      })}
    </fieldset>
  )
}

export default AddressField
