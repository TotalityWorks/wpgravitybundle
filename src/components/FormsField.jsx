/* eslint-disable react/prop-types */
import React, { lazy } from "react"

const Address = lazy(() => import("./FormFields/Address"))
// const Checkbox = lazy(() => import("./FormFields/Checkbox"))
const Consent = lazy(() => import("./FormFields/Consent"))
const Email = lazy(() => import("./FormFields/Email"))
const Name = lazy(() => import("./FormFields/Name"))
const Phone = lazy(() => import("./FormFields/Phone"))
// const Select = lazy(() => import("./FormFields/Select"))
const Text = lazy(() => import("./FormFields/Text"))
const TextArea = lazy(() => import("./FormFields/TextArea"))
const Website = lazy(() => import("./FormFields/Website"))

export default function FormsField({ field }) {
  switch (field.type) {
    case "address":
      return <Address field={field} />
    // case "checkbox":
    //   return (
    //     <>
    //       <Checkbox
    //         field={field}
    //         state={state}
    //         setFormData={setFormData}
    //         errors={errors}
    //         setErrors={setErrors}
    //         requiredFields={requiredFields}
    //       />
    //     </>);
    case "consent":
      return <Consent field={field} />
    case "email":
      return <Email field={field} />
    case "name":
      return <Name field={field} />
    case "phone":
      return <Phone field={field} />
    // case "select":
    //   return (
    //     <>
    //       <Select
    //         field={field}
    //         state={state}
    //         setFormData={setFormData}
    //         errors={errors}
    //         setErrors={setErrors}
    //         requiredFields={requiredFields}
    //       />
    //     </>);
    case "text":
      return <Text field={field} />
    case "textarea":
      return <TextArea field={field} />
    case "website":
      return <Website field={field} />
    default:
      return (
        <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>
      )
  }
}
