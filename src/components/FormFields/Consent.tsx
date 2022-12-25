import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { ConsentFieldProps } from "../../interfaces"

const ConsentField: React.FC<ConsentFieldProps> = props => {
  const { field } = props
  const { id, type, label, cssClass, isRequired, checkboxLabel } = field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${id}`
  const otherClasses = cssClass === undefined ? "" : `${cssClass}`
  const [isChecked, setIsChecked] = useState(false)
  const { state, dispatch } = useFormContext()

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setIsChecked(!isChecked)
    const newCheckedValue = isChecked ? null : value
    return dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: newCheckedValue },
    })
  }

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[valueId] === null) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  return (
    <div className={`${otherClasses}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="checkbox"
        name={String(id)}
        id={htmlId}
        onChange={handleChange}
        checked={isChecked}
        required={isRequired}
      />
      <p>{checkboxLabel}</p>
    </div>
  )
}

export default ConsentField
