export interface Form {
  id: string
  formId: number
  title?: string
  isActive?: Boolean
  description?: string
  descriptionPlacement?: string
  cssClass?: null
  cssClassList?: null
  labelPlacement?: string
  subLabelPlacement?: null
  validationSummary?: null
  confirmations?: Confirmation[]
  button: Button
  lastPageButton?: LastPageButton
  pagination?: Pagination
  formFields: { nodes: Field[] }
}

interface Button {
  type?: string
  text?: string
  imageUrl?: string
  conditionalLogic?: null
}

interface LastPageButton {
  imageUrl?: string
  text?: string
  type?: string
}

interface Pagination {
  type?: string
  style?: string
  pages?: string[]
  color?: null
  backgroundColor?: null
  progressbarCompletionText?: null
  displayProgressbarOnConfirmation?: Boolean
}

interface Confirmation {
  id?: string
  isDefault?: boolean
  message?: string
  name?: string
  pageId?: null
  queryString?: string
  type?: string
  url?: string
}

export interface Field {
  id: number
  type: string
  isRequired?: boolean
  [key: string]: any
}

export interface ConsentField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
  phoneFormat?: string
}

export interface PhoneField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
  phoneFormat?: string
}

interface RadioSelectFieldChoice {
  isSelected: Boolean
  text: string
  value: string
}

export interface SelectField extends Field {
  formId: string
  label?: string
  description?: string
  cssClass?: string
  defaultValue?: string
  choices: RadioSelectFieldChoice[]
  size?: string
}

export interface TextField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
}

export interface TextAreaField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
}

export interface WebsiteField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
}

export interface ValidationRule {
  id: number
  regex?: RegExp
  message?: string
}

export interface ConsentFieldProps {
  field: ConsentField
  validationRules?: ValidationRule[]
}

export interface PhoneFieldProps {
  field: PhoneField
  validationRules?: ValidationRule[]
}

export interface SelectFieldProps {
  field: SelectField
  validationRules?: ValidationRule[]
}

export interface TextFieldProps {
  field: TextField
  validationRules?: ValidationRule[]
}

export interface TextAreaFieldProps {
  field: TextAreaField
  validationRules?: ValidationRule[]
}

export interface WebsiteFieldProps {
  field: TextField
  validationRules?: ValidationRule[]
}
