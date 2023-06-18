import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { ConsentFieldProps } from "../../interfaces"

const ConsentField: React.FC<ConsentFieldProps> = props => {
  const { field } = props
  const {
    databaseId,
    type,
    label,
    cssClass,
    isRequired,
    checkboxLabel,
    pageNumber,
  } = field
  const valueId = `${type}${databaseId}Value`
  const htmlId = `field_${databaseId}`
  const otherClasses = cssClass === undefined ? "" : `${cssClass}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const [isChecked, setIsChecked] = useState(false)
  const { state, dispatch } = useFormContext()

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

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
    <div
      className={`${otherClasses}`.trim()}
      style={{ display: activePageStyle }}
    >
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="checkbox"
        name={String(databaseId)}
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
