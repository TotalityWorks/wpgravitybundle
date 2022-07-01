// import React, { useState } from "react"
// import moment from "moment"

// export default function TimeField(props: any) {
//   const { field } = props
//   const { id, formId, label, cssClass, isRequired, size } = field
//   const htmlId = `field_${formId}_${id}`
//   const [time, setTime] = useState("")
//   const classes = `${(size && size.toLowerCase()) || ""} ${cssClass}`.trim()

//   const handleChange = (event: any) => {
//     const { name, value } = event.target
//     const formattedValue = moment(value, "HH:mm:ss").format("hh:mm A")
//     return setTime({ [name]: formattedValue })
//   }

//   return (
//     <div className={classes}>
//       <label htmlFor={htmlId}>{label}</label>
//       <input
//         type="time"
//         name={id}
//         id={htmlId}
//         required={isRequired}
//         value={time.time}
//         onChange={handleChange}
//       />
//     </div>
//   )
// }
