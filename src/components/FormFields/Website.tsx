import React, { useState } from "react"
import { z } from "zod"

import { useFormContext } from "../../formContext"
import updateFormState from "../../updateFormState"

export default function WebsiteField(props: any) {
  const { field } = props
  const { id, formId, label, cssClass, isRequired, placeholder, size } = field
  const htmlId = `field_${formId}_${id}`
  const [websiteValue, setWebsiteValue] = useState("")
  const [validateWebsite, setValidateWebsite] = useState<{
    success?: any
    error?: any
  }>({})
  const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()
  const { dispatch } = useFormContext()

  const requiredWebsiteSchema =
    isRequired && z.string().url().startsWith("https://").min(12)
  const websiteSchema =
    requiredWebsiteSchema || z.string().startsWith("https://").url()

  const handleChange = (event: any) => {
    const { value } = event.target
    setWebsiteValue(value)
    const newWebsiteValue = value
    // check for empty field, and if not required it should not be parsed
    if ((value === "" || null) && !isRequired) {
      // zod would give an error if an empty string is parsed
      // so in this case we will reset state to avoid the error message.
      setValidateWebsite({})
      return updateFormState(field, newWebsiteValue, dispatch)
    }
    const validatedValue = websiteSchema.safeParse(value)
    setValidateWebsite(validatedValue)
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
      {validateWebsite && validateWebsite.error && (
        <p className="error-message">
          {validateWebsite.error.issues[0].message}
        </p>
      )}
    </div>
  )
}
