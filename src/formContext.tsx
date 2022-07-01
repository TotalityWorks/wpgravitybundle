/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer } from "react"

interface State {
  formData: {}
  errors: {}
  requiredFields: []
}

const initialState: State = {
  formData: {},
  errors: {},
  requiredFields: [],
}

function formReducer(state: State, action: any) {
  switch (action.type) {
    case "UPDATE_FORM_DATA": {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      }
    }
    case "ADD_REQUIRED_FIELDS": {
      return {
        ...state,
        requiredFields: action.payload,
      }
    }
    case "ADD_REQUIRED_FIELD": {
      return {
        ...state,
        requiredFields: [...state.requiredFields, action.payload],
      }
    }
    case "REMOVE_REQUIRED_FIELD": {
      const updatedRequiredFields = state.requiredFields.filter(
        field => field !== `${action.payload}`
      )
      return {
        ...state,
        requiredFields: updatedRequiredFields,
      }
    }
    case "REMOVE_REQUIRED_FIELDS": {
      // eslint-disable-next-line arrow-body-style
      const updatedRequiredFields = state.requiredFields.filter(field => {
        return !action.payload.includes(field)
      })
      return {
        ...state,
        requiredFields: updatedRequiredFields,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const FormContext = createContext<any>(undefined)

function FormProvider(props: any) {
  const { children } = props
  const [state, dispatch] = useReducer(formReducer, initialState)
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, dispatch }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

export { FormProvider, useFormContext }
