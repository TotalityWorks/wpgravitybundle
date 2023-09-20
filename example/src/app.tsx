import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import GravityForm, { useGravityFormMutation } from "../../src"
import Parser from 'html-react-parser'

import type { Form, ValidationRule, CaptchaSize } from '../../src/interfaces'
import data from "../data/query.json"

interface GravityFormData {
  form: Form
  validation?: ValidationRule[]
}

const formData = data.form as Form
const captchaSiteKey = String(process.env.REACT_APP_GOOGLE_INVISIBLE_CAPTCHA_SITE_KEY)
const captchaSecretKey = String(process.env.REACT_APP_GOODLE_INVISIBLE_CAPTCHA_SECRET_KEY)
const validation = [{id: 98, regex: /[0-9]+/g, message: "I don't like letters! Only numbers."}]

const App: React.FC<GravityFormData> = ({ form }) => {
  const [data, setData] = useState()
  const buttonClass = "btn btn-primary"

  const captcha = { 
    captchaSiteKey: captchaSiteKey, 
    captchaSecretKey: captchaSecretKey, 
    type: "invisible" as CaptchaSize
  }
  
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
            parser={Parser}
            captcha={captcha}
            debug={{console: true, ui: true}}
          />
        </>
      )}
      <pre>{gravityFormMutation}</pre>
    </>
  )
}

const root = createRoot(document.getElementById("root")!)

root.render(<App form={formData} />)
