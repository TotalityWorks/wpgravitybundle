import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import GravityForm, { useGravityFormMutation } from "../../src"

import type { Form, ValidationRule } from '../../src/interfaces'
import query from "../data/query.json"
const form = query.data.gravityFormsForm

interface GravityFormData {
  form: Form
  validation?: ValidationRule[]
}

const App: React.FC<GravityFormData> = ({ form }) => {
  const [data, setData] = useState()
  const buttonClass = "btn btn-primary"

  const validation = [{id: 98, regex: /[0-9]+/g}]

  const handleSubmit = (values: any) => {
    const formData = values
    return setData(formData)
  }

  const gravityFormMutation = useGravityFormMutation(form)

  return (
    <>
      {data ? (
        <>
          <p>Data Submitted</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <>
          <GravityForm
            form={form}
            onSubmit={handleSubmit}
            buttonClass={buttonClass}
            validation={validation}
          />
        </>
      )}
      <pre>{gravityFormMutation}</pre>
    </>
  )
}

const root = createRoot(document.getElementById("root")!)

root.render(<App form={form} />)
