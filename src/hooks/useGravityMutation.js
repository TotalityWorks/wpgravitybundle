const useGravityMutation = (formId, mutationVariables, fieldValuesShape) => {
  // uses mutationVariables and fieldValuesShape from useFormData to create
  // a ready-to-go GraphQL Mutation for your Gravity Forms form.
  const gravityFormMutation = `
        mutation SubmitForm(${mutationVariables}) {
            submitGravityFormsForm(
                input: {
                    formId: ${formId}
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

export default useGravityMutation
