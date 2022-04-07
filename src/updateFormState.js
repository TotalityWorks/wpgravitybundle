const updateFormState = (type, id, state, value, setFormData) => {
    const valueId = `${type}${id}`
    const values = {
      ...state,
      [valueId]: value
    }
    return setFormData(values)
}

export default updateFormState