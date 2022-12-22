import type { Field } from "../interfaces"

interface MutationInfo {
  mutationVariables: string
  fieldValuesShape: string
}

const createMutationVariables = (fields: Field[]): string => {
  // uses the form fields data to create a string literal for all
  // mutation variables your form will need.
  const mappedMutationVariables = fields.map((field, key) => {
    const { type, id, isRequired } = field
    const space: string = key === 0 ? "" : " "
    const value: string = `${type}${id}`
    const required = isRequired ?? false ? "!" : ""

    switch (type) {
      case "consent":
      case "phone":
      case "select":
      case "text":
      case "textarea":
      case "website":
        return `${space}$${value}Value: String${required}`
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
    const { id, type } = field
    const value = `${type}${id}`

    switch (type) {
      case "consent":
      case "phone":
      case "select":
      case "text":
      case "textarea":
      case "website":
        return `{
                  id: ${id}
                  value: $${value}Value
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
