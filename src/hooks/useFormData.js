const useFormData = (fields) => {
    // uses the form fields data to create a string literal for all
    // mutation variables your form will need.
    const mappedMutationVariables = fields.map((field, key) => {
        const { id, type, isRequired } = field;
        const required = `${isRequired ? '!' : ''}`
        const value = `${type}${id}`
        const space = key === 0 ? '' : ' '

        const isName = type === 'name'
        const isEmail = type === 'email'

        const street = `$${value}StreetValue: String${required}`;
        const lineTwo = `$${value}LineTwoValue: String${required}`
        const city = `$${value}CityValue: String${required}`
        const state = `$${value}StateValue: String${required}`
        const zip = `$${value}ZipValue: String${required}`
        const country = `$${value}CountryValue: String${required}`
        
        const email = `$${value}Value: String${required}`
        const emailConfirmation = isEmail && field.emailConfirmEnabled && `, $${value}ConfirmationValue: String${required}` || ''

        const prefixInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'prefix');
        const firstInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'first');
        const middleInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'middle');
        const lastInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'last');
        const suffixInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'suffix');
        const prefix = prefixInput && `$${value}PrefixValue: String${required}` || ''
        const first = firstInput && `$${value}FirstValue: String${required}` || ''
        const middle = middleInput && `$${value}MiddleValue: String${required}` || ''
        const last = lastInput && `$${value}LastValue: String${required}` || ''
        const suffix = suffixInput && `$${value}SuffixValue: String${required}` || ''

        switch(type) {
            case "address":
                return `${space}${street}, ${lineTwo}, ${city}, ${state}, ${zip}, ${country}`
            // case "checkbox":
            //     return `$${value}Value: String${required}`
            case "consent":
                return `${space}$${value}Value: String${required}`
            case "email":
                return `${space}${email}${emailConfirmation}`
            case "name":
                return `${space}${prefix}, ${first}, ${middle}, ${last}, ${suffix}`
            case "phone":
                return `${space}$${value}Value: String${required}`
            // case "select":
            //     return `$${value}Value: String${required}`
            case "text":
                return `${space}$${value}Value: String${required}`
            case "textarea":
                return `${space}$${value}Value: String${required}`
            case "website":
                return `${space}$${value}Value: String${required}`
            default:
                return ``
        }
    })

    const filteredMutationVariables = mappedMutationVariables.filter(i => i !== '' || null);
    const mutationVariables = filteredMutationVariables.toString();

    // uses form fields data to create the shape of your fieldValues array in your mutation
    const mappedFieldValuesShape = fields.map(field => {
        const { id, type } = field;
        const value = `${type}${id}`

        const isName = type === 'name'
        const isEmail = type === 'email'

        const street = `street: $${value}StreetValue`;
        const lineTwo = `lineTwo: $${value}LineTwoValue`
        const city = `city: $${value}CityValue`
        const state = `state: $${value}StateValue`
        const zip = `zip: $${value}ZipValue`
        const country = `country: $${value}CountryValue`

        const emailConfirmEnabled = isEmail && field.emailConfirmEnabled 
        const emailConfirmation = emailConfirmEnabled && `confirmationValue: $${value}ConfirmationValue` || ''

        const prefixInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'prefix');
        const firstInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'first');
        const middleInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'middle');
        const lastInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'last');
        const suffixInput = isName && field.inputs && field?.inputs?.find(input => input.key === 'suffix');
        const prefix = prefixInput && `prefix: $${value}PrefixValue` || ''
        const first = firstInput && `first: $${value}FirstValue` || ''
        const middle = middleInput && `middle: $${value}MiddleValue` || ''
        const last = lastInput && `last: $${value}LastValue` || ''
        const suffix = suffixInput && `suffix: $${value}SuffixValue` || ''

        
        switch(type) {
            case "address":
                return `{
                    id: ${id}
                    addressValues: {
                        ${street}
                        ${lineTwo}
                        ${city}
                        ${state}
                        ${zip}
                        ${country}
                    }
                }`
            case "consent":
                return `{
                    id: ${id}
                    value: "Consent"
                }`
            case "email":
                return `{
                    id: ${id}
                    emailValues: {
                        value: $${value}Value
                        ${emailConfirmation}
                    }
                }`
            case "name":
                return `{
                    id: ${id}
                    nameValues: {
                        ${prefix}
                        ${first}
                        ${middle}
                        ${last}
                        ${suffix}
                    }
                }`
            case "phone":
                return `{
                    id: ${id}
                    value: $${value}Value
                }`
            case "text":
                return `{
                    id: ${id}
                    value: $${value}Value
                }`
            case "textarea":
                return `{
                    id: ${id}
                    value: $${value}Value
                }`
            case "website":
                return `{
                    id: ${id}
                    value: $${value}Value
                }`
            default:
                return ''
            // case "select":
            //     return `$${value}Value: String${required}`
        }
    })

    const filteredFieldValuesShape = mappedFieldValuesShape.filter(i => i !== '' || null);
    const fieldValuesShape = filteredFieldValuesShape.join("\n")

    return { mutationVariables, fieldValuesShape }
}

export default useFormData

//   {
//     # Checkbox field value
//     id: 5
//     checkboxValues: [
//       { inputId: 5.1, value: "This checkbox field is selected" }
//       { inputId: 5.2, value: "This checkbox field is also selected" }
//     ]
//   }