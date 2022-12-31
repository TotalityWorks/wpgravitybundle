import useFormData from "./useFormData"
import type { Form } from "../interfaces"

export const useGravityFormMutation = (form: Form): string => {
  // passes form data into useFormData to return GraphQL Mutation variables & values shape
  const { mutationVariables, fieldValuesShape } = useFormData(
    form.formFields.nodes
  )

  const gravityFormMutation = `
      mutation SubmitForm(${mutationVariables}) {
          submitGfForm(
              input: {
                  id: ${form.databaseId}
                  fieldValues: [${fieldValuesShape}]
                  saveAsDraft: false
                  sourcePage: 1
                  targetPage: 0
              }
          ) {
            confirmation {
              type    
              message # The message HTML - if the confirmation type is a "MESSAGE".
              url     # The redirect URL - if the confirmation type is a "REDIRECT".
            }
            errors {
              id # The field that failed validation.
              message
            }
            entry {
              # See docs on querying Entries.
              id
              ... on GfSubmittedEntry {
                databaseId
              }
              ... on GfDraftEntry {
                resumeToken
              }
            }
          }
      }
  `

  return gravityFormMutation
}
