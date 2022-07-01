// import React, { useState, useEffect } from "react"

// import updateFormState from "../../updateFormState"

// export default function SelectField(props) {
//   const { field, state, setFormData, errors, setErrors, requiredFields } = props
//   const {
//     id,
//     formId,
//     type,
//     label,
//     description,
//     cssClass,
//     isRequired,
//     defaultValue,
//     choices,
//     size,
//   } = field
//   const htmlId = `field_${formId}_${id}`
//   const [selectValue, setSelectValue] = useState(defaultValue)
//   const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()

//   useEffect(() => {
//     updateFormState(
//       field,
//       state,
//       defaultValue,
//       setFormData,
//       errors,
//       setErrors,
//       requiredFields
//     )
//   }, [])

//   const handleChange = event => {
//     const { value } = event.target
//     setSelectValue(value)
//     const newSelectValue = value
//     return updateFormState(
//       field,
//       state,
//       newSelectValue,
//       setFormData,
//       errors,
//       setErrors,
//       requiredFields
//     )
//   }

//   return (
//     <div className={classes}>
//       <label htmlFor={htmlId}>{label}</label>
//       <select
//         name={id}
//         id={htmlId}
//         required={isRequired}
//         value={selectValue}
//         onChange={handleChange}
//       >
//         {choices?.map(choice => (
//           <option key={choice?.value || ""} value={choice?.value || ""}>
//             {choice?.text || ""}
//           </option>
//         ))}
//       </select>
//     </div>
//   )
// }
