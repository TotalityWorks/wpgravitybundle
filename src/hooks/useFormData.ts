import type { Field, NameInput } from "../interfaces"

interface MutationInfo {
  mutationVariables: string
  fieldValuesShape: string
}

const createMutationVariables = (fields: Field[]): string => {
  // uses the form fields data to create a string literal for all
  // mutation variables your form will need.
  const mappedMutationVariables = fields.map((field, key) => {
    const { type, databaseId, isRequired } = field
    const space: string = key === 0 ? "" : " "
    const value: string = `${type}${databaseId}`
    const required: string = isRequired ?? false ? "!" : ""

    const addressField = (): string => {
      const street = `$${value}StreetValue: String${required}`
      const lineTwo = `$${value}LineTwoValue: String${required}`
      const city = `$${value}CityValue: String${required}`
      const state = `$${value}StateValue: String${required}`
      const zip = `$${value}ZipValue: String${required}`
      const country = `$${value}CountryValue: AddressFieldCountryEnum${required}`

      return `${space}${street}, ${lineTwo}, ${city}, ${state}, ${zip}, ${country}`
    }

    const emailField = (): string => {
      const email = `$${value}Value: String${required}`
      const emailConfirmed =
        field.hasEmailConfirmation !== null &&
        Boolean(field.hasEmailConfirmation)
      const emailConfirmation = emailConfirmed
        ? `, $${value}ConfirmationValue: String${required}`
        : ""

      return `${space}${email}${emailConfirmation}`
    }

    const nameField = (): string => {
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
        ? `$${value}PrefixValue: String${required}, `
        : ""
      const first = !(firstInput?.isHidden ?? false)
        ? `$${value}FirstValue: String${required}, `
        : ""
      const middle = !(middleInput?.isHidden ?? false)
        ? `$${value}MiddleValue: String${required}, `
        : ""
      const last = !(lastInput?.isHidden ?? false)
        ? `$${value}LastValue: String${required}`
        : ""
      const suffix = !(suffixInput?.isHidden ?? false)
        ? `, $${value}SuffixValue: String${required}`
        : ""

      return `${space}${prefix}${first}${middle}${last}${suffix}`
    }

    switch (type) {
      case "CAPTCHA":
      case "CONSENT":
      case "DATE":
      case "HIDDEN":
      case "NUMBER":
      case "PHONE":
      case "RADIO":
      case "SELECT":
      case "TEXT":
      case "TEXTAREA":
      case "WEBSITE":
        return `${space}$${value}Value: String${required}`
      case "ADDRESS":
        return addressField()
      case "EMAIL":
        return emailField()
      case "FILEUPLOAD":
        return `${space}$${value}Value: [ Upload ]${required}`
      case "NAME":
        return nameField()
      default:
        return ``
    }
  })

  const filteredMutationVariables = mappedMutationVariables.filter(
    i => i !== "" || null
  )
  const mutationVariables = filteredMutationVariables.toString()

  return mutationVariables
}

const createFieldValuesShape = (fields: Field[]): string => {
  // uses form fields data to create the shape of your fieldValues array in your mutation
  const mappedFieldValuesShape = fields.map(field => {
    const { databaseId, type } = field
    const value = `${type}${databaseId}`

    const street = `street: $${value}StreetValue`
    const lineTwo = `lineTwo: $${value}LineTwoValue`
    const city = `city: $${value}CityValue`
    const state = `state: $${value}StateValue`
    const zip = `zip: $${value}ZipValue`
    const country = `country: $${value}CountryValue`

    const isEmail = type === "EMAIL"
    const emailConfirmed =
      field.hasEmailConfirmation !== null && Boolean(field.hasEmailConfirmation)
    const emailConfirmEnabled = isEmail && emailConfirmed
    const emailConfirmation = emailConfirmEnabled
      ? `confirmationValue: $${value}ConfirmationValue`
      : ""

    const isName = type === "NAME"
    const prefixInput: NameInput | undefined =
      isName &&
      field?.inputs?.find((input: NameInput) => input.key === "prefix")
    const firstInput: NameInput | undefined =
      isName && field?.inputs?.find((input: NameInput) => input.key === "first")
    const middleInput: NameInput | undefined =
      isName &&
      field?.inputs?.find((input: NameInput) => input.key === "middle")
    const lastInput: NameInput | undefined =
      isName && field?.inputs?.find((input: NameInput) => input.key === "last")
    const suffixInput: NameInput | undefined =
      isName &&
      field?.inputs?.find((input: NameInput) => input.key === "suffix")
    const prefix = !(prefixInput?.isHidden ?? false)
      ? `prefix: $${value}PrefixValue`
      : ""
    const first = !(firstInput?.isHidden ?? false)
      ? `first: $${value}FirstValue`
      : ""
    const middle = !(middleInput?.isHidden ?? false)
      ? `middle: $${value}MiddleValue`
      : ""
    const last = !(lastInput?.isHidden ?? false)
      ? `last: $${value}LastValue`
      : ""
    const suffix = !(suffixInput?.isHidden ?? false)
      ? `suffix: $${value}SuffixValue`
      : ""

    switch (type) {
      case "CAPTCHA":
      case "CONSENT":
      case "DATE":
      case "HIDDEN":
      case "NUMBER":
      case "PHONE":
      case "RADIO":
      case "SELECT":
      case "TEXT":
      case "TEXTAREA":
      case "WEBSITE":
        return `{
                  id: ${databaseId}
                  value: $${value}Value
                }`
      case "ADDRESS":
        return `{
                  id: ${databaseId}
                  addressValues: {
                      ${street}
                      ${lineTwo}
                      ${city}
                      ${state}
                      ${zip}
                      ${country}
                    }
                  }`
      case "EMAIL":
        return `{
                  id: ${databaseId}
                  emailValues: {
                      value: $${value}Value
                      ${emailConfirmation}
                  }
                }`
      case "FILEUPLOAD":
        return `{
                  id: ${databaseId}
                  fileUploadValues: $${value}Value
                }`
      case "NAME":
        return `{
                  id: ${databaseId}
                  nameValues: {
                    ${prefix}
                    ${first}
                    ${middle}
                    ${last}
                    ${suffix}
                  }
                }`
      default:
        return ""
    }
  })

  const filteredFieldValuesShape = mappedFieldValuesShape.filter(
    i => i !== "" || null
  )
  const fieldValuesShape = filteredFieldValuesShape.join("\n")

  return fieldValuesShape
}

const useFormData = (fields: Field[]): MutationInfo => {
  const mutationVariables = createMutationVariables(fields)
  const fieldValuesShape = createFieldValuesShape(fields)
  return { mutationVariables, fieldValuesShape }
}

export default useFormData
