/* eslint-disable react/prop-types */
import React from "react"

import { useFormContext } from "../formContext"

export default function Button(props: any) {
  const { type, text, cssClass, onClick } = props
  const { state } = useFormContext()
  const disabled =
    Object.keys(state.errors).length || state.requiredFields.length

  return (
    <div className={`${cssClass}`.trim()}>
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {text || "Submit"}
      </button>
    </div>
  )
}
