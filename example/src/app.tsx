import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import GravityForm, { useGravityFormMutation } from "../../src"

import type { Form, ValidationRule } from '../../src/interfaces'
import data from "../data/query.json"

interface GravityFormData {
  form: Form
  validation?: ValidationRule[]
}

const App: React.FC<GravityFormData> = ({ form }) => {
  const [data, setData] = useState()
  const buttonClass = "btn btn-primary"
  // const captchaSiteKey = String(process.env.GOOGLE_INVISIBLE_CAPTCHA_SITE_KEY)
  // const captchaSecretKey = String(process.env.GOODLE_INVISIBLE_CAPTCHA_SECRET_KEY)

  const validation = [{id: 98, regex: /[0-9]+/g, message: "I don't like letters! Only numbers."}]
  // const captcha = { captchaSiteKey: captchaSiteKey, captchaSecretKey: captchaSecretKey, type: "Invisible" }

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
            // captcha={captcha}
            debug={true}
          />
        </>
      )}
      <pre>{gravityFormMutation}</pre>
    </>
  )
}

const root = createRoot(document.getElementById("root")!)

root.render(<App form={data.form} />)
