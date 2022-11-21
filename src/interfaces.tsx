export interface Field {
  id: string
  type: string
  [key: string]: any
}

export interface TextField {
  id: string
  type: string
  formId: string
  label: string
  cssClass: string
  isRequired: boolean
  placeholder: string
  size?: string
}

export interface TextFieldProps {
  field: TextField
}
