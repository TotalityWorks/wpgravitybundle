const updateNameRequiredField = (value, requiredFields, nameFieldValue, dispatch, fieldName) => {
  console.log(fieldName);
  if(value === "") {
    if(requiredFields.includes(`${nameFieldValue}${fieldName}`)) {
      return
    }
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: `${nameFieldValue}${fieldName}` })
  }
  if(value) {
    return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: `${nameFieldValue}${fieldName}` })
  }
  return
}

const updateNameRequiredFields = (field, value, dispatch) => {
  const { prefix, first, middle, last, suffix } = value;
  const formData = dispatch.formData;
  const requiredFields = formData.requiredFields;
  const nameFieldValue = `${field.type}${field.id}`
  updateNameRequiredField(prefix, requiredFields, nameFieldValue, dispatch.dispatch, "Prefix")
  updateNameRequiredField(first, requiredFields, nameFieldValue, dispatch.dispatch, "First")
  updateNameRequiredField(middle, requiredFields, nameFieldValue, dispatch.dispatch, "Middle")
  updateNameRequiredField(last, requiredFields, nameFieldValue, dispatch.dispatch, "Last")
  updateNameRequiredField(suffix, requiredFields, nameFieldValue, dispatch.dispatch, "Suffix")
}

const updateAddressRequiredFields = (field, value, dispatch) => {
  const { street, city, state, zip, country } = value;
  const missingFields = !street || street === '' || !city || city === '' || !state || state === '' || !zip || zip === '' || !country || country === '';
  const { type, id } = field;
  const streetId = `${type}${id}Street`
  const cityId = `${type}${id}City`
  const stateId = `${type}${id}State`
  const zipId = `${type}${id}Zip`
  const countryId = `${type}${id}Country`
  const addressFields = [streetId, cityId, stateId, zipId, countryId];

  if(missingFields) {
    if(dispatch.formData.requiredFields.includes(`${streetId}`)) {
      return
    }
    return addressFields.map(field => {
      return dispatch.dispatch({ type: "ADD_REQUIRED_FIELD", payload: field })
    })
  }
  return dispatch.dispatch({ type: "REMOVE_REQUIRED_FIELDS", payload: addressFields })
}

const updateRequiredFields = (field, value, dispatch) => {
  const fieldValue = `${field.type}${field.id}`
  if(!field.isRequired) return
  if(field.type === 'name') {
    return updateNameRequiredFields(field, value, dispatch);
  }

  if(field.type === 'address') {
    return updateAddressRequiredFields(field, value, dispatch);
  }

  console.log(value)
  if(value === "" || value === null) {
    return dispatch({ type: "ADD_REQUIRED_FIELD", payload: fieldValue })    
  }
  return dispatch({ type: "REMOVE_REQUIRED_FIELD", payload: fieldValue })
}

const validateValue = (field, value, dispatch) => {
  updateRequiredFields(field, value, dispatch);
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

    if(type === 'address') {
      const { street, lineTwo, city, state, zip, country } = value;
      const streetId = `${type}${id}StreetValue`;
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

      return dispatch.dispatch({ type: "UPDATE_FORM_DATA", payload: values})
    }

    const valueId = `${type}${id}Value`
    return dispatch({ type: "UPDATE_FORM_DATA", payload: {[valueId]: value} })
  }

export default updateFormState
