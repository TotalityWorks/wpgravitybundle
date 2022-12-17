export interface Form {
  id: string
  formId: number
  title: string
  isActive: Boolean
  description: string
  descriptionPlacement: string
  cssClass: null
  cssClassList: null
  labelPlacement: string
  subLabelPlacement: null
  validationSummary: null
  confirmations: Confirmation[]
  button: Button
  lastPageButton: LastPageButton
  pagination: Pagination
  formFields: { nodes: Field[] }
}

interface Button {
  type?: string
  text: string
  imageUrl: string
  conditionalLogic: null
}

interface LastPageButton {
  imageUrl: string
  text: string
  type: string
}

interface Pagination {
  type: string
  style: string
  pages: string[]
  color: null
  backgroundColor: null
  progressbarCompletionText: null
  displayProgressbarOnConfirmation: Boolean
}

interface Confirmation {
  id: string
  isDefault: boolean
  message: string
  name: string
  pageId: null
  queryString: string
  type: string
  url: string
}

export interface Field {
  id: number
  type: string
  isRequired: boolean
  [key: string]: any
}

export interface TextField {
  id: number
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
