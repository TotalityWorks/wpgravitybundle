import React, { useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { HiddenFieldProps } from "../../interfaces"

const HiddenField: React.FC<HiddenFieldProps> = props => {
  const { field } = props
  const { id, type, cssClass, label, defaultValue } = field
  const valueId = `${type}${id}Value`
  const htmlId = `field_${id}`
  const classes =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const { dispatch } = useFormContext()

  useEffect(() => {
    dispatch({ type: ActionTypes.Update, payload: { [valueId]: defaultValue } })
  }, [])

  return (
    <div className={`${classes}`} style={{ display: "none" }}>
      <label htmlFor={htmlId}>{label}</label>
      <input type="hidden" value={defaultValue} name={htmlId} id={htmlId} />
    </div>
  )
}

export default HiddenField
