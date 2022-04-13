const updateFormState = (type, id, formState, value, setFormData) => {
    if(type === 'name') {
      const { prefix, first, middle, last, suffix } = value;
      const prefixValueId = prefix && `$${type}${id}PrefixValue`
      const firstValueId = first && `$${type}${id}FirstValue`
      const middleValueId = middle && `$${type}${id}MiddleValue`
      const lastValueId = last && `$${type}${id}LastValue`
      const suffixValueId = suffix && `$${type}${id}SuffixValue`

      let values = { ...formState };
      
      if(prefix) { values = { ...formState, [prefixValueId]: prefix } }
      if(first) { values = { ...formState, [firstValueId]: first } }
      if(middle) { values = { ...formState, [middleValueId]: middle } }
      if(last) { values = { ...formState, [lastValueId]: last } }
      if(suffix) { values = { ...formState, [suffixValueId]: suffix } }      
      return setFormData(values)
    }

    if(type === 'address') {
      const { street, lineTwo, city, state, zip, country } = value;
      const streetId = `$${type}${id}StreetValue`;
      const lineTwoId = `$${type}${id}LineTwoValue`
      const cityId = `$${type}${id}CityValue`
      const stateId = `$${type}${id}StateValue`
      const zipId = `$${type}${id}ZipValue`
      const countryId = `$${type}${id}CountryValue`

      const addressValues = {
        [streetId]: street,
        [lineTwoId]: lineTwo,
        [cityId]: city,
        [stateId]: state,
        [zipId]: zip,
        [countryId]: country,
      }
      const values = {
        ...formState,
        ...addressValues
      }
      return setFormData(values)
    }

    const valueId = `$${type}${id}Value`
    const values = {
      ...formState,
      [valueId]: value
    }
    return setFormData(values)
}

export default updateFormState
