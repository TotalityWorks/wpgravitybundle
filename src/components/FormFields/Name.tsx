import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { NameFieldProps, NameInput } from "../../interfaces"

interface NameValue {
  [key: string]: string
}

const NameField: React.FC<NameFieldProps> = props => {
  const { field, validationRules } = props
  const {
    databaseId,
    type,
    label,
    cssClass,
    isRequired,
    size,
    inputs,
    pageNumber,
  } = field
  const valueId = `${type}${databaseId}Value`
  const htmlId = `field_${databaseId}`
  const sizeClass =
    size === undefined || size === null ? "" : `${size.toLowerCase()}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes = `${sizeClass} ${otherClasses}`
  const prefixInput = inputs?.find(input => input.key === "prefix")
  const otherInputs = inputs?.filter(input => input.key !== "prefix") ?? []
  const hiddenPrefix =
    prefixInput?.isHidden === undefined ? false : prefixInput?.isHidden
  const [nameValue, setNameValue] = useState<NameValue>({})
  const { state, dispatch } = useFormContext()
  const validationRule = validationRules?.find(rule => rule.id === databaseId)

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  function inputValueKeys(): string[] {
    const value = `${type}${databaseId}`
    const prefixInput: NameInput | undefined = inputs?.find(
      (input: NameInput) => input.key === "prefix"
    )
    const firstInput: NameInput | undefined = inputs?.find(
      (input: NameInput) => input.key === "first"
    )
    const middleInput: NameInput | undefined = inputs?.find(
      (input: NameInput) => input.key === "middle"
    )
    const lastInput: NameInput | undefined = inputs?.find(
      (input: NameInput) => input.key === "last"
    )
    const suffixInput: NameInput | undefined = inputs?.find(
      (input: NameInput) => input.key === "suffix"
    )

    const prefix = !(prefixInput?.isHidden ?? false)
      ? `${value}PrefixValue`
      : ""
    const first = !(firstInput?.isHidden ?? false) ? `${value}FirstValue` : ""
    const middle = !(middleInput?.isHidden ?? false)
      ? `${value}MiddleValue`
      : ""
    const last = !(lastInput?.isHidden ?? false) ? `${value}LastValue` : ""
    const suffix = !(suffixInput?.isHidden ?? false)
      ? `${value}SuffixValue`
      : ""
    const requiredNameFields = [prefix, first, middle, last, suffix]
    const filteredKeys = requiredNameFields.filter(field => field.length > 0)

    return filteredKeys
  }

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
    const { prefix, first, middle, last, suffix } = value
    const prefixValueId =
      (Boolean(prefix) || prefix === "") && `${type}${databaseId}PrefixValue`
    const firstValueId =
      (Boolean(first) || first === "") && `${type}${databaseId}FirstValue`
    const middleValueId =
      (Boolean(middle) || middle === "") && `${type}${databaseId}MiddleValue`
    const lastValueId =
      (Boolean(last) || last === "") && `${type}${databaseId}LastValue`
    const suffixValueId =
      (Boolean(suffix) || suffix === "") && `${type}${databaseId}SuffixValue`

    let values = {}

    if (Boolean(prefix) || prefix === "") {
      values = { ...values, [String(prefixValueId)]: prefix }
    }
    if (Boolean(first) || first === "") {
      values = { ...values, [String(firstValueId)]: first }
    }
    if (Boolean(middle) || middle === "") {
      values = { ...values, [String(middleValueId)]: middle }
    }
    if (Boolean(last) || last === "") {
      values = { ...values, [String(lastValueId)]: last }
    }
    if (Boolean(suffix) || suffix === "") {
      values = { ...values, [String(suffixValueId)]: suffix }
    }

    const updatedValues = { ...values }

    return updatedValues
  }

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    event.preventDefault()
    const { name, value } = event.currentTarget
    validateField(value)
    const newNameValue = { ...nameValue, [name]: value }
    const formattedValue = formatValuesForState(newNameValue)
    setNameValue({ ...nameValue, [name]: value })
    return dispatch({
      type: ActionTypes.Update,
      payload: formattedValue,
    })
  }

  const valueKeys = inputValueKeys()

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    valueKeys.map(key => {
      if (state.formData?.[key]?.length === 0) {
        return dispatch({
          type: ActionTypes.AddRequiredField,
          payload: key,
        })
      }
      return dispatch({ type: ActionTypes.RemoveRequiredField, payload: key })
    })
  }, [nameValue])

  return (
    <fieldset
      id={htmlId}
      className={classes}
      style={{ display: activePageStyle }}
    >
      <legend>{label}</legend>
      {Boolean(prefixInput) && !hiddenPrefix ? (
        <>
          <label htmlFor={`input_${databaseId}_${String(prefixInput?.key)}`}>
            {prefixInput?.label}
          </label>
          <select
            name={String(prefixInput?.key)}
            id={`input_${databaseId}_${String(prefixInput?.key)}`}
            value={nameValue?.prefix}
            onChange={handleChange}
          >
            <option value=""></option>
            {prefixInput?.choices?.map(choice => (
              <option key={choice?.value} value={String(choice?.value)}>
                {String(choice?.text)}
              </option>
            ))}
          </select>
        </>
      ) : null}

      {otherInputs?.map(input => {
        const key = String(input.key)
        const inputLabel = input?.label
        const placeholderValue =
          input?.placeholder === undefined || input?.placeholder === null
            ? ""
            : `${input?.placeholder}`
        if (input.isHidden ?? false) {
          return <></>
        }
        return (
          <div key={key}>
            <label htmlFor={`input_${databaseId}_${key}`}>{inputLabel}</label>
            <input
              name={String(key)}
              type="text"
              id={`input_${databaseId}_${key}`}
              placeholder={placeholderValue}
              required={isRequired}
              onChange={handleChange}
            />
          </div>
        )
      })}
      <p className="error-message">{errorMessage?.message}</p>
    </fieldset>
  )
}

export default NameField
