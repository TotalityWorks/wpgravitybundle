// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';

// // import updateFormState from '../../updateFormState';

// export default function DateField(props) {
//   const {
//     field, state, setFormData, errors, setErrors, requiredFields,
//   } = props;
//   const {
//     id, formId, label, cssClass, isRequired, placeholder, size,
//   } = field;
//   const htmlId = `field_${formId}_${id}`;
//   const [dateValue, setDateValue] = useState('');
//   const classes = `${(size && size.toLowerCase()) || ''} ${cssClass}`.trim();

//   const handleChange = (event) => {
//     const { value } = event.target;
//     // formattedValue is one day prior due to Timezone issues. Must fix.
//     // const formattedValue = format(new Date(value), 'MM/dd/yyyy');
//     setDateValue(value);
//     // const newDateValue = formattedValue;
// eslint-disable-next-line max-len
//     // return updateFormState(field, state, newDateValue, setFormData, errors, setErrors, requiredFields);
//   };

//   return (
//     <div className={classes}>
//       <label htmlFor={htmlId}>{label}</label>
//       <input
//         type="date"
//         name={id}
//         id={htmlId}
//         required={isRequired}
//         placeholder={placeholder || ''}
//         value={dateValue}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
