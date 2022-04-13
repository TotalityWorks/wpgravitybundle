import useFormData from './useFormData'
import useGravityMutation from './useGravityMutation'

const useGravityFormMutation = (form) => {
  // passes form data into useFormData to return GraphQL Mutation variables & values shape
  const { mutationVariables, fieldValuesShape } = useFormData(form.formFields.nodes);

  // plugs the mutation variables and values shape into mutation string literal
  // returns a ready-to-go GraphQL mutation for Gravity Forms Data
  const gravityFormMutation = useGravityMutation(form.formId, mutationVariables, fieldValuesShape);
  
  return gravityFormMutation;
}

export default useGravityFormMutation
