import React, { useEffect } from "react"

// import components
import { useFormContext, ActionTypes } from "../formContext"
import FormsField from "./FormsField"
import Button from "./Button"
import { supportedFields } from "../constants"

// import types
import type { Form, ValidationRule, NameInput } from "../interfaces"

interface GravityFormData {
  form: Form
  onSubmit: Function
  buttonClass?: string
  validation?: ValidationRule[]
  captcha?: {
    captchaSiteKey: string
    captchaSecretKey: string
    type: string
  }
  parser?: Function
  debug?: boolean
}

const FormComponent: React.FC<GravityFormData> = props => {
  const { form, buttonClass, onSubmit, validation, captcha, parser, debug } =
    props
  const fields = form.formFields.nodes
  const button = form.submitButton
  const { state, dispatch } = useFormContext()
  const disabled = state.errors.length > 0 || state.requiredFields.length > 0

  const handleSubmit = (e: React.SyntheticEvent): Function => {
    e.preventDefault()
    const values = state.formData
    return onSubmit(values)
  }

  useEffect(() => {
    const allSupportedFields = fields.filter(field =>
      supportedFields.includes(field.type)
    )
    const requiredFields = allSupportedFields
      .map(field => {
        if (field.type === "CAPTCHA") {
          if (captcha?.type.toLowerCase() === "invisible") return null
          return `${field.type}${field.id}Value`
        }
        if (!(field.isRequired ?? false)) return null
        if (field.type === "NAME") {
          const value = `${field.type}${field.id}`
          const prefixInput: NameInput | undefined = field?.inputs?.find(
            (input: NameInput) => input.key === "prefix"
          )
          const firstInput: NameInput | undefined = field?.inputs?.find(
            (input: NameInput) => input.key === "first"
          )
          const middleInput: NameInput | undefined = field?.inputs?.find(
            (input: NameInput) => input.key === "middle"
          )
          const lastInput: NameInput | undefined = field?.inputs?.find(
            (input: NameInput) => input.key === "last"
          )
          const suffixInput: NameInput | undefined = field?.inputs?.find(
            (input: NameInput) => input.key === "suffix"
          )

          const prefix = !(prefixInput?.isHidden ?? false)
            ? `${value}PrefixValue`
            : "not required"
          const first = !(firstInput?.isHidden ?? false)
            ? `${value}FirstValue`
            : "not required"
          const middle = !(middleInput?.isHidden ?? false)
            ? `${value}MiddleValue`
            : "not required"
          const last = !(lastInput?.isHidden ?? false)
            ? `${value}LastValue`
            : "not required"
          const suffix = !(suffixInput?.isHidden ?? false)
            ? `${value}SuffixValue`
            : "not required"
          const requiredNameFields = [prefix, first, middle, last, suffix]
          const filterNameFields = requiredNameFields.filter(
            field => field !== "not required"
          )

          return filterNameFields
        }
        if (field.type === "ADDRESS") {
          const { type, id } = field
          const streetId = `${type}${id}StreetValue`
          // lineTwo is not needed for required fields
          const cityId = `${type}${id}CityValue`
          const stateId = `${type}${id}StateValue`
          const zipId = `${type}${id}ZipValue`
          const countryId = `${type}${id}CountryValue`
          const requiredAddressFields = [
            streetId,
            cityId,
            stateId,
            zipId,
            countryId,
          ]

          return requiredAddressFields
        }

        const valueId = `${field.type}${field.id}Value`
        return valueId
      })
      .flat()
      .filter(field => field !== null)

    allSupportedFields.map(field => {
      if (Number(field?.pageNumber) <= state.totalPageCount) return null
      return dispatch({
        type: ActionTypes.UpdateTotalPageCount,
        payload: field.pageNumber,
      })
    })
    dispatch({ type: ActionTypes.AddRequired, payload: requiredFields })
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        {Boolean(fields) && (
          <>
            {fields.map(field => {
              if (field.type === "PAGE")
                return (
                  <React.Fragment
                    key={`${field.id}-${field.type}`}
                  ></React.Fragment>
                )
              return (
                <FormsField
                  key={`${field.id}-${field.type}`}
                  field={field}
                  validation={validation}
                  captcha={captcha}
                  parser={parser}
                />
              )
            })}

            {/* PAGE returns Next/Previous buttons for form pages */}
            {fields.map(field => {
              if (field.type !== "PAGE")
                return (
                  <React.Fragment
                    key={`${field.id}-${field.type}`}
                  ></React.Fragment>
                )
              return (
                <FormsField
                  key={`${field.id}-${field.type}`}
                  field={field}
                  validation={validation}
                />
              )
            })}
          </>
        )}

        {Boolean(button) && state.totalPageCount === state.currentPage && (
          <Button
            type={button.type}
            text={button.text}
            cssClass={buttonClass}
            onClick={handleSubmit}
            disabled={disabled}
          />
        )}
      </form>

      {Boolean(debug) && console.log(state)}
    </>
  )
}

export default FormComponent
