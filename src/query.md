The following query was used to produce src/data/query.json:

query MyQuery($id: String!) {
  gravityFormsForm(id: $id) {
    id
    formId
    title
    isActive
    description
    descriptionPlacement
    cssClass
    cssClassList
    labelPlacement
    subLabelPlacement
    validationSummary
    confirmations {
      id
      isDefault
      message
      name
      pageId
      queryString
      type
      url
    }
    button {
      type
      text
      imageUrl
      conditionalLogic {
        actionType
        logicType
        rules {
          fieldId
          operator
          value
        }
      }
    }
    lastPageButton {
      imageUrl
      text
      type
    }
    pagination {
      type
      style
      pages
      color
      backgroundColor
      progressbarCompletionText
      displayProgressbarOnConfirmation
    }
    formFields {
      nodes {
        id
        formId
        type
        cssClass
        pageNumber
        layoutGridColumnSpan
        layoutSpacerGridColumnSpan
        ... on AddressField {
            id
            label
            description
            inputName
            isRequired
            visibility
            labelPlacement
            subLabelPlacement
            addressType
            size
          }
          ... on CaptchaField {
            id
            label
            description
            visibility
            simpleCaptchaSize
            simpleCaptchaFontColor
            simpleCaptchaBackgroundColor
            captchaType
            captchaTheme
            captchaLanguage
            allowsPrepopulate
            size
          }
          ... on CheckboxField {
            id
            label
            description
            visibility
            isRequired
            inputs {
              id
              label
              name
            }
            choices {
              isSelected
              text
              value
            }
            checkboxValues {
              inputId
              value
            }
            enableChoiceValue
            enablePrice
            enableSelectAll
            size
          }
          ... on ConsentField {
            id
            visibility
            label
            isRequired
            description
            checkboxLabel
          }
          ... on DateField {
            id
            visibility
            subLabelPlacement
            placeholder
            noDuplicates
            isRequired
            label
            description
            defaultValue
            dateType
            dateFormat
            calendarIconUrl
            calendarIconType
            allowsPrepopulate
            size
          }
          ... on EmailField {
            id
            visibility
            placeholder
            noDuplicates
            label
            isRequired
            inputs {
              autocompleteAttribute
              customLabel
              defaultValue
              id
              isHidden
              key
              label
              name
              placeholder
            }
            inputName
            enableAutocomplete
            emailConfirmEnabled
            descriptionPlacement
            description
            autocompleteAttribute
            allowsPrepopulate
            size
          }
          ... on FileUploadField {
            id
            visibility
            values
            multipleFiles
            maxFiles
            maxFileSize
            label
            isRequired
            inputName
            description
            descriptionPlacement
            allowsPrepopulate
            allowedExtensions
            size
          }
          ... on HiddenField {
            id
            defaultValue
            inputName
            isRequired
            label
            noDuplicates
            type
            value
            visibility
            size
          }
          ... on HtmlField {
            id
            allowsPrepopulate
            content
            disableMargins
            displayOnly
            label
            type
            visibility
            size
          }
          ... on ListField {
            id
            addIconUrl
            allowsPrepopulate
            deleteIconUrl
            description
            descriptionPlacement
            enableColumns
            isRequired
            label
            labelPlacement
            maxRows
            type
            visibility
            size
            listValues {
              value
              values
            }
            choices {
              text
              value
            }
          }
          ... on MultiSelectField {
            id
            allowsPrepopulate
            description
            enableChoiceValue
            enableEnhancedUI
            isRequired
            label
            type
            values
            visibility
            size
          }
          ... on NameField {
            id
            allowsPrepopulate
            description
            descriptionPlacement
            enableAutocomplete
            isRequired
            label
            nameFormat
            subLabelPlacement
            type
            visibility
            nameValues {
              first
              last
              middle
              prefix
              suffix
            }
            inputs {
              placeholder
              name
              label
              key
              isHidden
              id
              enableChoiceValue
              defaultValue
              customLabel
              autocompleteAttribute
              choices {
                isSelected
                text
                value
              }
            }
            size
          }
          ... on NumberField {
            id
            allowsPrepopulate
            autocompleteAttribute
            calculationFormula
            calculationRounding
            defaultValue
            description
            descriptionPlacement
            enableAutocomplete
            enableCalculation
            isRequired
            label
            noDuplicates
            numberFormat
            placeholder
            rangeMax
            rangeMin
            type
            value
            visibility
            size
          }
          ... on PageField {
            id
            visibility
            type
            label
            displayOnly
            allowsPrepopulate
            nextButton {
              type
              text
              imageUrl
              conditionalLogic {
                actionType
                logicType
                rules {
                  fieldId
                  operator
                  value
                }
              }
            }
            previousButton {
              type
              text
              imageUrl
              conditionalLogic {
                actionType
                logicType
                rules {
                  value
                  operator
                  fieldId
                }
              }
            }
            size
          }
          ... on PasswordField {
            id
            visibility
            subLabelPlacement
            placeholder
            minPasswordStrength
            passwordStrengthEnabled
            label
            isRequired
            allowsPrepopulate
            description
            descriptionPlacement
            inputs {
              placeholder
              label
              isHidden
              id
              customLabel
            }
            size
          }
          ... on PhoneField {
            id
            visibility
            type
            value
            placeholder
            phoneFormat
            noDuplicates
            label
            isRequired
            errorMessage
            enableAutocomplete
            description
            descriptionPlacement
            defaultValue
            autocompleteAttribute
            allowsPrepopulate
            size
          }
          ... on PostCategoryField {
            id
            visibility
            values
            type
            placeholder
            noDuplicates
            label
            isRequired
            displayAllCategories
            description
            descriptionPlacement
            allowsPrepopulate
            choices {
              isSelected
              text
              value
            }
            size
          }
          ... on PostContentField {
            id
            visibility
            value
            type
            placeholder
            maxLength
            label
            isRequired
            description
            descriptionPlacement
            size
          }
          ... on PostCustomField {
            id
            visibility
            values
            type
            postCustomFieldName
            placeholder
            noDuplicates
            maxLength
            label
            isRequired
            description
            descriptionPlacement
            defaultValue
            allowsPrepopulate
            size
          }
          ... on PostExcerptField {
            id
            visibility
            value
            type
            size
            placeholder
            maxLength
            label
            isRequired
            description
            descriptionPlacement
            defaultValue
            allowsPrepopulate
          }
          ... on PostImageField {
            id
            visibility
            type
            subLabelPlacement
            size
            postFeaturedImage
            label
            isRequired
            description
            descriptionPlacement
            displayAlt
            displayCaption
            displayDescription
            displayTitle
            imageValues {
              url
              title
              description
              caption
              altText
            }
          }
          ... on PostTagsField {
            id
            visibility
            values
            type
            size
            placeholder
            maxLength
            label
            isRequired
            enableSelectAll
            description
            descriptionPlacement
            defaultValue
            allowsPrepopulate
          }
          ... on PostTitleField {
            id
            visibility
            value
            size
            placeholder
            label
            isRequired
            description
            descriptionPlacement
            defaultValue
            allowsPrepopulate
          }
          ... on RadioField {
            id
            visibility
            value
            size
            noDuplicates
            label
            isRequired
            enablePrice
            enableOtherChoice
            enableChoiceValue
            description
            descriptionPlacement
            allowsPrepopulate
            choices {
              isOtherChoice
              isSelected
              text
              value
            }
          }
          ... on SectionField {
            id
            visibility
            size
            label
            displayOnly
            description
            allowsPrepopulate
          }
          ... on SelectField {
            id
            visibility
            value
            size
            placeholder
            noDuplicates
            label
            isRequired
            enablePrice
            enableEnhancedUI
            enableChoiceValue
            enableAutocomplete
            description
            descriptionPlacement
            defaultValue
            autocompleteAttribute
            allowsPrepopulate
            choices {
              isSelected
              text
              value
            }
          }
          ... on SignatureField {
            id
            visibility
            value
            size
            penSize
            penColor
            label
            isRequired
            description
            descriptionPlacement
            boxWidth
            borderWidth
            borderStyle
            borderColor
            backgroundColor
          }
          ... on TextAreaField {
            id
            visibility
            value
            useRichTextEditor
            size
            placeholder
            noDuplicates
            maxLength
            label
            isRequired
            description
            descriptionPlacement
            defaultValue
            allowsPrepopulate
          }
          ... on TextField {
            id
            visibility
            value
            size
            placeholder
            noDuplicates
            maxLength
            label
            isRequired
            enablePasswordInput
            enableAutocomplete
            description
            descriptionPlacement
            defaultValue
            autocompleteAttribute
            allowsPrepopulate
          }
          ... on TimeField {
            id
            visibility
            size
            subLabelPlacement
            timeFormat
            timeValues {
              amPm
              displayValue
              hours
              minutes
            }
            noDuplicates
            label
            isRequired
            description
            descriptionPlacement
            allowsPrepopulate
            inputs {
              autocompleteAttribute
              customLabel
              defaultValue
              id
              isHidden
              key
              label
              name
              placeholder
            }
          }
          ... on WebsiteField {
            id
            visibility
            value
            size
            placeholder
            noDuplicates
            label
            isRequired
            description
            descriptionPlacement
            defaultValue
            allowsPrepopulate
          }
      }
    }
  }
}
