import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import GravityForm, { useGravityFormMutation } from "../../src"

import type { Form } from '../../src/interfaces'
import query from "../data/query.json"
const form = query.data.gravityFormsForm
// const buttonClass = "btn btn-primary"

interface GravityFormData {
  form: Form
}

const App: React.FC<GravityFormData> = ({ form }) => {
  const [data, setData] = useState()

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
            // buttonClass={buttonClass}
          />
        </>
      )}
      <pre>{gravityFormMutation}</pre>
    </>
  )
}

const root = createRoot(document.getElementById("root")!)

root.render(<App form={form} />)
