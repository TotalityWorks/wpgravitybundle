import React, { useState } from "react"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function WebsiteField(props: any) {
  const { field } = props
  const { id, formId, label, cssClass, isRequired, placeholder, size } = field
  const htmlId = `field_${formId}_${id}`
  const [websiteValue, setWebsiteValue] = useState("")
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  const handleChange = (event: any) => {
    const { value } = event.target
    setWebsiteValue(value)
    const newWebsiteValue = value
    return updateFormState(field, newWebsiteValue, dispatch)
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="url"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ""}
        value={websiteValue}
        onChange={handleChange}
      />
    </div>
  )
}
