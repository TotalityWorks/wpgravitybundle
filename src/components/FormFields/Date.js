import React, { useState } from "react";
import moment from 'moment';

export default function DateField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ date, setDate ] = useState('');
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = moment(value).format('DD MMMM, YYYY');
    console.log(date)
    return setDate({[name]: formattedValue});
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="date"
        name={id}
        id={htmlId}
        required={isRequired}
        placeholder={placeholder || ''}
        value={date.date}
        onChange={handleChange}
      />
    </div>
  );
}
