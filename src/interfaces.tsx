export interface Form {
  id: string
  databaseId: number
  cssClass?: string | null
  customRequiredIndicator?: null
  dateCreated?: string
  dateCreatedGmt?: string
  description?: string
  descriptionPlacement?: string
  firstPageCssClass?: string
  hasConditionalLogicAnimation?: boolean
  hasHoneypot?: boolean
  hasValidationSummary?: boolean
  isActive?: boolean
  isTrash?: boolean
  labelPlacement?: string
  markupVersion?: number
  nextFieldId?: number
  nodeType?: string
  requiredIndicator?: null
  subLabelPlacement?: null
  title?: string
  version?: string
  confirmations?: Confirmation[]
  pagination?: Pagination
  saveAndContinue?: null
  scheduling?: Scheduling
  submitButton: Button
  formFields: { nodes: Field[] }
}

interface Button {
  imageUrl?: string | null
  layoutGridColumnSpan?: null
  location?: null
  type?: string
  text?: string
  width?: null
  conditionalLogic?: null
}

interface Pagination {
  type?: string
  style?: string
  pageNames?: string[]
  color?: null
  backgroundColor?: null
  progressbarCompletionText?: null
  hasProgressbarOnConfirmation?: Boolean
}

interface Scheduling {
  closedMessage: null
  hasSchedule: boolean
  pendingMessage: null
  startDetails: {
    amPm: null
    dateGmt: null
    hour: null
    minute: null
  }
  endDetails: {
    amPm: null
    dateGmt: null
    hour: null
    minute: null
  }
}

interface Confirmation {
  id?: string
  isActive: boolean
  isAutoformatted: boolean
  isDefault?: boolean
  message?: string
  name?: string
  pageId?: null
  queryString?: string
  type?: string
  url?: string
  conditionalLogic: null
}

export interface Field {
  id: number
  type: string
  isRequired?: boolean
  [key: string]: any
}

interface AddressInput {
  key?: string
  label?: string
  placeholder?: string
}

export interface AddressField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
  inputs?: AddressInput[]
}

export interface ConsentField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
}

export interface EmailField extends Field {
  formId: string
  label?: string
  cssClass?: string
  placeholder?: string
  size?: string
}

interface NameInputChoice {
  text?: string
  value?: string
}

export interface NameInput {
  key?: string
  label?: string
  isHidden?: boolean
  placeholder?: string
  choices?: NameInputChoice[]
}

export interface NameField extends Field {
  formId: string
  label?: string
  cssClass?: string
  size?: string
  inputs?: NameInput[]
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

export interface AddressFieldProps {
  field: AddressField
  validationRules?: ValidationRule[]
}

export interface ConsentFieldProps {
  field: ConsentField
  validationRules?: ValidationRule[]
}

export interface EmailFieldProps {
  field: EmailField
  validationRules?: ValidationRule[]
}

export interface NameFieldProps {
  field: NameField
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
