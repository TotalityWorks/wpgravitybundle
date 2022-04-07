import React, { useState } from "react";
import moment from 'moment';

export default function TimeField({ field }) {
  const { id, formId, type, label, description, cssClass, isRequired } = field;
  const htmlId = `field_${formId}_${id}`;
  const [ time, setTime ] = useState('');
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = moment(value, "HH:mm:ss").format('hh:mm A');
    return setTime({[name]: formattedValue});
  }

  return (
    <div className={`${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="time"
        name={id}
        id={htmlId}
        required={isRequired}
        value={time.time}
        onChange={handleChange}
      />
    </div>
  );
}
