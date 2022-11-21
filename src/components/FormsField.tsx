import React, { lazy } from "react"

// import types
import { Field, TextField } from "../interfaces"

// import components
const Text = lazy(async () => await import("./FormFields/Text"))

const FormsField: React.FC<{ field: Field }> = props => {
  const { field } = props
  switch (field.type) {
    case "text":
      return <Text field={field as TextField} />
    default:
      return (
        <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>
      )
  }
}

export default FormsField
