/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { render } from "react-dom"
import GravityForm, { useGravityFormMutation } from "../../src"

import query from "../../src/data/query.json"

function App(props) {
  const { form, buttonClass } = props
  const [data, setData] = useState()

  const handleSubmit = values => {
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
        <GravityForm
          form={form}
          onSubmit={handleSubmit}
          buttonClass={buttonClass}
        />
      )}
      <pre>{gravityFormMutation}</pre>
    </>
  )
}

const form = query.data.gravityFormsForm
const buttonClass = "btn btn-primary"

render(
  <App form={form} buttonClass={buttonClass} />,
  document.getElementById("root")
)
