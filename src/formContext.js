import React, { createContext, useContext, useReducer } from 'react'

const FormContext = createContext()

const initialState = {
  formData: {},
  errors: {},
  requiredFields: []
}

function formReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_FORM_DATA': {
        return { 
          ...state,
          formData: { 
            ...state.formData, 
            ...action.payload
          }
        }
      }
      case 'ADD_REQUIRED_FIELDS': {
        return {
          ...state,
          requiredFields: action.payload
        }
      }
      case 'ADD_REQUIRED_FIELD': {
        return {
          ...state,
          requiredFields: [...state.requiredFields, action.payload]
        }
      }
      case 'REMOVE_REQUIRED_FIELD': {
        const updatedRequiredFields = 
            state.requiredFields.filter(field => field !== `${action.payload}`)
        return {
          ...state,
          requiredFields: updatedRequiredFields
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

  function FormProvider({ children }) {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const value = { state, dispatch }
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
  }

  function useFormContext() {
    const context = useContext(FormContext)
    if (context === undefined) {
      throw new Error('useFormContext must be used within a FormProvider')
    }
    return context
  }
  
  export { FormProvider, useFormContext }