import React, { createContext, useContext, useReducer } from "react"

interface Error {
  name: string
  message: string
}

interface State {
  formData: { [key: string]: any }
  errors: Error[]
  requiredFields: string[]
  currentPage: number
  totalPageCount: number
}

export enum ActionTypes {
  Update = "UPDATE_FORM_DATA",
  AddRequired = "ADD_REQUIRED_FIELDS",
  AddRequiredField = "ADD_REQUIRED_FIELD",
  RemoveRequiredField = "REMOVE_REQUIRED_FIELD",
  AddError = "ADD_ERROR_MESSAGE",
  RemoveError = "REMOVE_ERROR_MESSAGE",
  ChangePageNumber = "CHANGE_PAGE_NUMBER",
  UpdateTotalPageCount = "UPDATE_TOTAL_PAGE_COUNT",
}

interface Action {
  type: ActionTypes
  payload: any
}

type Dispatch = (action: Action) => void

interface DefinedContext {
  state: State
  dispatch: Dispatch
}

type Context = DefinedContext | undefined

const initialState: State = {
  formData: {},
  errors: [],
  requiredFields: [],
  currentPage: 1,
  totalPageCount: 1,
}

function formReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.Update: {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      }
    }
    case ActionTypes.AddRequired: {
      return {
        ...state,
        requiredFields: action.payload,
      }
    }
    case ActionTypes.AddRequiredField: {
      const requiredFieldsCopy = [...state.requiredFields]
      requiredFieldsCopy.push(action.payload)
      const uniqueRequiredFields = new Set(requiredFieldsCopy)
      const updatedRequiredFields = [...uniqueRequiredFields]
      return {
        ...state,
        requiredFields: updatedRequiredFields,
      }
    }
    case ActionTypes.RemoveRequiredField: {
      const filteredRequiredFields = state.requiredFields.filter(
        field => field !== action.payload
      )
      return {
        ...state,
        requiredFields: [...filteredRequiredFields],
      }
    }
    case ActionTypes.AddError: {
      const errorExists = state.errors.filter(
        err => err.name.toString() === action.payload.name
      )
      if (errorExists.length > 0) {
        const updatedErrors = state.errors.map(err => {
          if (err.name.toString() === action.payload.name) {
            return { name: err.name, message: action.payload.message }
          }
          return err
        })
        return {
          ...state,
          errors: updatedErrors,
        }
      }
      return {
        ...state,
        errors: [...state.errors, action.payload],
      }
    }
    case ActionTypes.RemoveError: {
      const filteredErrors = state.errors.filter(
        error => error.name.toString() !== action.payload
      )
      return {
        ...state,
        errors: [...filteredErrors],
      }
    }
    case ActionTypes.ChangePageNumber: {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    case ActionTypes.UpdateTotalPageCount: {
      return {
        ...state,
        totalPageCount: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type.`)
    }
  }
}

const FormContext = createContext<Context>(undefined)

const FormProvider: React.FC<{ children: React.ReactNode }> = props => {
  const { children } = props
  const [state, dispatch] = useReducer(formReducer, initialState)
  const value = { state, dispatch }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

function useFormContext(): DefinedContext {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

export { FormProvider, useFormContext }
