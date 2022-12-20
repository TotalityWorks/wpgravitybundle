import useFormData from "./useFormData"
import type { Form } from "../interfaces"

export const useGravityFormMutation = (form: Form): string => {
  // passes form data into useFormData to return GraphQL Mutation variables & values shape
  const { mutationVariables, fieldValuesShape } = useFormData(
    form.formFields.nodes
  )

  const gravityFormMutation = `
      mutation SubmitForm(${mutationVariables}) {
          submitGravityFormsForm(
              input: {
                  formId: ${form.formId}
                  fieldValues: [${fieldValuesShape}]
                  saveAsDraft: false
                  sourcePage: 1
                  targetPage: 0
              }
          ) {
              errors {
                  id
                  message
              }
              entryId
              resumeToken
              entry {
                  id
              }
          }
      }
  `

  return gravityFormMutation
}