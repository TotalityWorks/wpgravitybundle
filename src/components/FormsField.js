import React from 'react';
// import Address from './FormFields/Address';
// import Checkbox from './FormFields/Checkbox';
import Date from './FormFields/Date';
import Email from './FormFields/Email';
// import MultiSelect from './FormFields/MultiSelect';
import Name from './FormFields/Name';
import Phone from './FormFields/Phone';
// import Radio from './FormFields/Radio';
import Select from './FormFields/Select';
import Text from './FormFields/Text';
import TextArea from './FormFields/TextArea';
import Time from './FormFields/Time';
// import Website from './FormFields/Website';

export default function FormsField({ field, register }) {
  switch (field.type) {
    // case "address":
    //   return <Address field={field} fieldErrors={fieldErrors} />;
    // case "checkbox":
    //   return <Checkbox field={field} fieldErrors={fieldErrors} />;
    case "date":
      return <Date field={field} register={register} />;
    case "email":
      return <Email field={field} register={register} />;
    // case "multiselect":
    //   return <MultiSelect field={field} fieldErrors={fieldErrors} />;
    case "name":
      return <Name field={field} register={register} />;
    case "phone":
      return <Phone field={field} register={register} />;
    // case "radio":
    //   return <Radio field={field} fieldErrors={fieldErrors} />;
    case "select":
      return <Select field={field} register={register} />;
    case "text":
      return <Text field={field} register={register} />;
    case "textarea":
      return <TextArea field={field} register={register} />;
    case "time":
      return <Time field={field} register={register} />;
    // case "website":
    //   return <Website field={field} fieldErrors={fieldErrors} />;
    default:
      return <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>;
  }
}