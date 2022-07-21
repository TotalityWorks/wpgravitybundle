/* eslint-disable react/prop-types */
import React, { useEffect } from "react"

import { useFormContext } from "../formContext"
import FormsField from "./FormsField"
import Button from "./Button"

interface GravityFormData {
  form: any
  buttonClass: any
  onSubmit: any
}

export default function Form(props: GravityFormData) {
  const { form, buttonClass, onSubmit } = props
  const fields = form.formFields.nodes
  const { button } = form
  const { state, dispatch } = useFormContext()

  const requiredFields = fields.map((field: any) => {
    if (field.type === "name") {
      if (field.isRequired) {
        const value = `${field.type}${field.id}`
        const prefixInput = field?.inputs?.find(
          (input: any) => input.key === "prefix"
        )
        const firstInput = field?.inputs?.find(
          (input: any) => input.key === "first"
        )
        const middleInput = field?.inputs?.find(
          (input: any) => input.key === "middle"
        )
        const lastInput = field?.inputs?.find(
          (input: any) => input.key === "last"
        )
        const suffixInput = field?.inputs?.find(
          (input: any) => input.key === "suffix"
        )

        const prefix =
          (prefixInput && !prefixInput.isHidden && `${value}Prefix`) ||
          "not required"
        const first =
          (firstInput && !firstInput.isHidden && `${value}First`) ||
          "not required"
        const middle =
          (middleInput && !middleInput.isHidden && `${value}Middle`) ||
          "not required"
        const last =
          (lastInput && !lastInput.isHidden && `${value}Last`) || "not required"
        const suffix =
          (suffixInput && !suffixInput.isHidden && `${value}Suffix`) ||
          "not required"
        const requiredNameFields = [prefix, first, middle, last, suffix]
        const filterNameFields = requiredNameFields.filter(
          rNfield => rNfield !== "not required"
        )

        return filterNameFields
      }
      return "not required"
    }
    if (field.type === "address") {
      if (field.isRequired) {
        const { type, id } = field
        const streetId = `${type}${id}Street`
        // const lineTwoId = `${type}${id}LineTwo`
        const cityId = `${type}${id}City`
        const stateId = `${type}${id}State`
        const zipId = `${type}${id}Zip`
        const countryId = `${type}${id}Country`

        const requiredAddressFields = [
          streetId,
          cityId,
          stateId,
          zipId,
          countryId,
        ]
        return requiredAddressFields
      }
      return "not required"
    }
    if (field.isRequired) {
      return `${field.type}${field.id}`
    }
    return "not required"
  })
  const filteredRequiredFields = requiredFields
    .flat()
    .filter((field: any) => field !== "not required")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const values = state.formData
    return onSubmit(values)
  }

  useEffect(() => {
    dispatch({ type: "ADD_REQUIRED_FIELDS", payload: filteredRequiredFields })
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields &&
          fields.map((field: any) => (
            <FormsField key={`${field.id}-${field.type}`} field={field} />
          ))}

        {button && (
          <Button
            type={button.type}
            text={button.text}
            cssClass={buttonClass}
            onClick={handleSubmit}
          />
        )}
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}
