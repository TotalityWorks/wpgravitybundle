// const validateValue = (field: any, value: any, dispatch: any) => {
// switch (field.type) {
//   case "address":
//     return validateAddressField()
//   case "consent":
//     return validateConstentField()
//   case "email":
//     return validateEmailField()
//   case "name":
//     return validateNameFields()
//   case "phone":
//     return validatePhoneField()
//   case "text":
//     return validateTextField()
//   case "textarea":
//     return validateTextAreaField()
//   case "website":
//     return validateWebsiteField()
//   default:
//     return ""
// }
// }

const updateRequiredFields = (field: any, value: any, dispatch: any) => {
  const fieldValue = `${field.type}${field.id}`

  const updateNameRequiredFields = (updatedValue: any) => {
    const { prefix, first, middle, last, suffix } = updatedValue
    const { formData } = dispatch
    const { requiredFields } = formData
    const nameFieldValue = `${field.type}${field.id}`

    const updateNameRequiredField = (
      singleNameFieldValue: any,
      fieldName: any
    ) => {
      if (singleNameFieldValue === "") {
        if (requiredFields.includes(`${nameFieldValue}${fieldName}`)) {
          return {}
        }
        return dispatch.dispatch({
          type: "ADD_REQUIRED_FIELD",
          payload: `${nameFieldValue}${fieldName}`,
        })
      }
      if (singleNameFieldValue) {
        return dispatch.dispatch({
          type: "REMOVE_REQUIRED_FIELD",
          payload: `${nameFieldValue}${fieldName}`,
        })
      }
      return {}
    }

    updateNameRequiredField(prefix, "Prefix")
    updateNameRequiredField(first, "First")
    updateNameRequiredField(middle, "Middle")
    updateNameRequiredField(last, "Last")
    updateNameRequiredField(suffix, "Suffix")
  }

  const updateAddressRequiredFields = (updatedValue: any) => {
    const { street, city, state, zip, country } = updatedValue
    const missingFields =
      !street ||
      street === "" ||
      !city ||
      city === "" ||
      !state ||
      state === "" ||
      !zip ||
      zip === "" ||
      !country ||
      country === ""
    const { type, id } = field
    const streetId = `${type}${id}Street`
    const cityId = `${type}${id}City`
    const stateId = `${type}${id}State`
    const zipId = `${type}${id}Zip`
    const countryId = `${type}${id}Country`
    const addressFields = [streetId, cityId, stateId, zipId, countryId]

    if (missingFields) {
      if (dispatch.formData.requiredFields.includes(`${streetId}`)) {
        return {}
      }
      return addressFields.map(addressField =>
        dispatch.dispatch({ type: "ADD_REQUIRED_FIELD", payload: addressField })
      )
    }
    return dispatch.dispatch({
      type: "REMOVE_REQUIRED_FIELDS",
      payload: addressFields,
    })
  }

  if (!field.isRequired) return {}
  if (field.type === "name") {
    return updateNameRequiredFields(value)
  }

  if (field.type === "address") {
    return updateAddressRequiredFields(value)
  }

  if (value === "" || value === null) {
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: fieldValue })
  }
  return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: fieldValue })
}

const updateFormState = (field: any, value: any, dispatch: any) => {
  const { type, id } = field

  // validateValue(field, value, dispatch)
  updateRequiredFields(field, value, dispatch)

  if (type === "name") {
    const { prefix, first, middle, last, suffix } = value
    const prefixValueId = (prefix || prefix === "") && `${type}${id}PrefixValue`
    const firstValueId = (first || first === "") && `${type}${id}FirstValue`
    const middleValueId = (middle || middle === "") && `${type}${id}MiddleValue`
    const lastValueId = (last || last === "") && `${type}${id}LastValue`
    const suffixValueId = (suffix || suffix === "") && `${type}${id}SuffixValue`

    let values = {}

    if (prefix || prefix === "") {
      values = { ...values, [prefixValueId]: prefix }
    }
    if (first || first === "") {
      values = { ...values, [firstValueId]: first }
    }
    if (middle || middle === "") {
      values = { ...values, [middleValueId]: middle }
    }
    if (last || last === "") {
      values = { ...values, [lastValueId]: last }
    }
    if (suffix || suffix === "") {
      values = { ...values, [suffixValueId]: suffix }
    }

    const updatedValues = { ...values }
    return dispatch.dispatch({
      type: "UPDATE_FORM_DATA",
      payload: updatedValues,
    })
  }

  if (type === "address") {
    const { street, lineTwo, city, state, zip, country } = value
    const streetId = `${type}${id}StreetValue`
    const lineTwoId = `${type}${id}LineTwoValue`
    const cityId = `${type}${id}CityValue`
    const stateId = `${type}${id}StateValue`
    const zipId = `${type}${id}ZipValue`
    const countryId = `${type}${id}CountryValue`

    const values = {
      [streetId]: street,
      [lineTwoId]: lineTwo,
      [cityId]: city,
      [stateId]: state,
      [zipId]: zip,
      [countryId]: country,
    }

    return dispatch.dispatch({ type: "UPDATE_FORM_DATA", payload: values })
  }

  const valueId = `${type}${id}Value`
  return dispatch({ type: "UPDATE_FORM_DATA", payload: { [valueId]: value } })
}

export default updateFormState
