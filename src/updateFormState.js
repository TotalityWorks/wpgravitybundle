// The following 5 functions will update the Required Field State for each Name field individually.

const updatePrefixNameRequiredField = (value, requiredFields, nameFieldValue, dispatch) => {
  if(value === "") {
    if(requiredFields.includes(`${nameFieldValue}Prefix`)) {
      return
    }
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: `${nameFieldValue}Prefix` })
  }
  if(value) {
    return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: `${nameFieldValue}Prefix` })
  }
  return
}

const updateFirstNameRequiredField = (value, requiredFields, nameFieldValue, dispatch) => {
  if(value === "") {
    if(requiredFields.includes(`${nameFieldValue}First`)) {
      return
    }
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: `${nameFieldValue}First` })
  }
  if(value) {
    return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: `${nameFieldValue}First` })
  }
  return
}

const updateMiddleNameRequiredField = (value, requiredFields, nameFieldValue, dispatch) => {
  if(value === "") {
    if(requiredFields.includes(`${nameFieldValue}Middle`)) {
      return
    }
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: `${nameFieldValue}Middle` })
  }
  if(value) {
    return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: `${nameFieldValue}Middle` })
  }
  return
}

const updateLastNameRequiredField = (value, requiredFields, nameFieldValue, dispatch) => {
  if(value === "") {
    if(requiredFields.includes(`${nameFieldValue}Last`)) {
      return
    }
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: `${nameFieldValue}Last` })
  }
  if(value) {
    return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: `${nameFieldValue}Last` })
  }
  return
}

const updateSuffixNameRequiredField = (value, requiredFields, nameFieldValue, dispatch) => {
  if(value === "") {
    if(requiredFields.includes(`${nameFieldValue}Suffix`)) {
      return
    }
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: `${nameFieldValue}Suffix` })
  }
  if(value) {
    return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: `${nameFieldValue}Suffix` })
  }
  return
}

const updateNameRequiredFields = (field, value, dispatch) => {
  const { prefix, first, middle, last, suffix } = value;
  const formData = dispatch.formData;
  const nameFieldValue = `${field.type}${field.id}`

  updatePrefixNameRequiredField(prefix, formData.requiredFields, nameFieldValue, dispatch.dispatch);
  updateFirstNameRequiredField(first, formData.requiredFields, nameFieldValue, dispatch.dispatch);
  updateMiddleNameRequiredField(middle, formData.requiredFields, nameFieldValue, dispatch.dispatch);
  updateLastNameRequiredField(last, formData.requiredFields, nameFieldValue, dispatch.dispatch);
  updateSuffixNameRequiredField(suffix, formData.requiredFields, nameFieldValue, dispatch.dispatch);
}

const updateRequiredFields = (field, value, dispatch) => {
  // add check for required fields. Only add required fields if isRequired.

  const fieldValue = `${field.type}${field.id}`
  if(field.type === 'name') {
    return updateNameRequiredFields(field, value, dispatch);
  }

  if(value === ('' || null)) {
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: fieldValue })    
  }
  return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: fieldValue })
}

const validateValue = (field, value, dispatch) => {
  switch(field.type) {
    case 'consent':
      return updateRequiredFields(field, value, dispatch);
    case 'email':
      return updateRequiredFields(field, value, dispatch);
    case 'name':
      return updateRequiredFields(field, value, dispatch);
    case 'phone':
      return updateRequiredFields(field, value, dispatch);
    case 'text':
      return updateRequiredFields(field, value, dispatch);
    case 'textarea':
      return updateRequiredFields(field, value, dispatch);
    case 'website':
      return updateRequiredFields(field, value, dispatch);
    default:
      break
  }
  return
}

const updateFormState = (field, value, dispatch) => {
    const { type, id } = field;

    validateValue(field, value, dispatch);

    if(type === 'name') {
      const { prefix, first, middle, last, suffix } = value;
      const prefixValueId = (prefix || prefix === '') && `${type}${id}PrefixValue`
      const firstValueId = (first || first === '') && `${type}${id}FirstValue`
      const middleValueId = (middle || middle === '') && `${type}${id}MiddleValue`
      const lastValueId = (last || last === '') && `${type}${id}LastValue`
      const suffixValueId = (suffix || suffix === '') && `${type}${id}SuffixValue`

      let values;

      if(prefix || prefix === '') { values = { ...values, [prefixValueId]: prefix } }
      if(first || first === '') { values = { ...values, [firstValueId]: first } }
      if(middle || middle === '') { values = { ...values, [middleValueId]: middle } }
      if(last || last === '') { values = { ...values, [lastValueId]: last } }
      if(suffix || suffix === '') { values = { ...values, [suffixValueId]: suffix } }      

      const updatedValues = {...values};
      return dispatch.dispatch({ type: "UPDATE_FORM_DATA", payload: updatedValues})
    }

    // if(type === 'address') {
    //   const { street, lineTwo, city, state, zip, country } = value;
    //   const streetId = `${type}${id}StreetValue`;
    //   const lineTwoId = `${type}${id}LineTwoValue`
    //   const cityId = `${type}${id}CityValue`
    //   const stateId = `${type}${id}StateValue`
    //   const zipId = `${type}${id}ZipValue`
    //   const countryId = `${type}${id}CountryValue`

    //   const values = {
    //     [streetId]: street,
    //     [lineTwoId]: lineTwo,
    //     [cityId]: city,
    //     [stateId]: state,
    //     [zipId]: zip,
    //     [countryId]: country,
    //   }

    //   return dispatch({ type: "UPDATE_FORM_DATA", payload: values})
    // }

    const valueId = `${type}${id}Value`
    // const values = {
    //   ...state,
    //   [valueId]: value
    // }
    return dispatch({ type: "UPDATE_FORM_DATA", payload: {[valueId]: value} })
  }

export default updateFormState
