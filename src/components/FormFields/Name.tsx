import React, { useState } from "react"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

type Name = { [key: string]: undefined | string }

export default function NameField(props: any) {
  const { field } = props
  const { id, formId, label, cssClass, inputs, size } = field
  const htmlId = `field_${formId}_${id}`
  const prefixInput =
    inputs && inputs.find((input: any) => input.key === "prefix")
  const otherInputs =
    inputs?.filter((input: any) => input?.key !== "prefix") || []
  const nameDefault: Name = {}
  const [nameValue, setNameValue] = useState(nameDefault)
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { state: formData, dispatch } = useFormContext()
  const context = { formData, dispatch }

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setNameValue({ ...nameValue, [name]: value })
    const newNameValue = { ...nameValue, [name]: value }
    return updateFormState(field, newNameValue, context)
  }

  return (
    <fieldset id={htmlId} className={classes}>
      <legend>{label}</legend>
      {prefixInput && !prefixInput.isHidden ? (
        <select
          name={String(prefixInput.key)}
          id={`input_${formId}_${id}_${prefixInput.key}`}
          value={nameValue?.prefix}
          onChange={handleChange}
        >
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <option value="" />
          {prefixInput.choices?.map((choice: any) => (
            <option key={choice?.value} value={String(choice?.value)}>
              {String(choice?.text)}
            </option>
          ))}
        </select>
      ) : null}
      {otherInputs &&
        otherInputs.map((input: any) => {
          const { key } = input
          const inputLabel = input?.label || ""
          const placeholder = input?.placeholder || ""
          const isRequired = input?.isRequired || ""
          if (input.isHidden) {
            return <div />
          }
          return (
            <div key={key}>
              <label htmlFor={`input_${formId}_${id}_${key}`}>
                {inputLabel}
              </label>
              <input
                name={String(key)}
                type="text"
                id={`input_${formId}_${id}_${key}`}
                placeholder={placeholder}
                required={isRequired}
                value={nameValue?.[key]}
                onChange={handleChange}
              />
            </div>
          )
        })}
    </fieldset>
  )
}
