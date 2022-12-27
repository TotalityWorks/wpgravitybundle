import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { AddressFieldProps } from "../../interfaces"

interface AddressValue {
  [key: string]: string
}

const AddressField: React.FC<AddressFieldProps> = props => {
  const { field, validationRules } = props
  const { id, type, label, cssClass, inputs, size, isRequired } = field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${id}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const classes = `${sizeClass} ${otherClasses}`
  const [addressValue, setAddressValue] = useState<AddressValue>({})
  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === id)
  const streetId = `${type}${id}StreetValue`
  const lineTwoId = `${type}${id}LineTwoValue`
  const cityId = `${type}${id}CityValue`
  const stateId = `${type}${id}StateValue`
  const zipId = `${type}${id}ZipValue`
  const countryId = `${type}${id}CountryValue`

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  function validateField(value: string): void {
    const validationRegex =
      validationRule?.regex != null
        ? validationRule.regex
        : /[a-z0-9!#$%&'*+/=?^_`{|}~-]/

    const validationMessage =
      validationRule?.message != null
        ? validationRule.message
        : "Please enter valid characters."

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

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const { name, value } = event.currentTarget
    validateField(value)
    const newAddressValue = { ...addressValue, [name]: value }
    const formattedValue = formatValuesForState(newAddressValue)
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
    <fieldset id={htmlId} className={classes}>
      <legend>{label}</legend>
      {inputs?.map(input => {
        const key = String(input?.key)
        const inputLabel = input?.label
        const placeholder = input?.placeholder
        const fieldValueId = `${key}Id`

        return (
          <div key={key}>
            <input
              type="text"
              name={String(key)}
              id={`input_${id}_${key}`}
              placeholder={placeholder}
              defaultValue={state.formData?.[fieldValueId]}
              onChange={handleChange}
            />
            <label htmlFor={`input_${id}_${key}`}>{inputLabel}</label>
          </div>
        )
      })}
      <p className="error-message">{errorMessage?.message}</p>
    </fieldset>
  )
}

export default AddressField
