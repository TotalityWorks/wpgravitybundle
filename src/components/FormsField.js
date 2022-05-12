import React from 'react';

// import Address from './FormFields/Address';
// import Checkbox from './FormFields/Checkbox';
import Consent from './FormFields/Consent';
import Email from './FormFields/Email';
import Name from './FormFields/Name';
import Phone from './FormFields/Phone';
// import Select from './FormFields/Select';
import Text from './FormFields/Text';
import TextArea from './FormFields/TextArea';
import Website from './FormFields/Website';

export default function FormsField({ field, errors, setErrors, requiredFields }) {
  switch (field.type) {
    // case "address":
    //   return (
    //     <>
    //       <Address 
    //         field={field} 
    //         state={state} 
    //         setFormData={setFormData} 
    //         errors={errors} 
    //         setErrors={setErrors}
    //         requiredFields={requiredFields}
    //       />
    //     </>);
    // case "checkbox":
    //   return (
    //     <>
    //       <Checkbox 
    //         field={field} 
    //         state={state} 
    //         setFormData={setFormData} 
    //         errors={errors} 
    //         setErrors={setErrors}
    //         requiredFields={requiredFields}
    //       />
    //     </>);
    case "consent":
      return <Consent field={field} />;
    case "email":
      return <Email field={field} />;
    case "name":
      return <Name field={field} />;
    case "phone":
      return <Phone field={field} />;
    // case "select":
    //   return (
    //     <>
    //       <Select 
    //         field={field} 
    //         state={state} 
    //         setFormData={setFormData} 
    //         errors={errors} 
    //         setErrors={setErrors} 
    //         requiredFields={requiredFields}
    //       />
    //     </>);
    case "text":
      return <Text field={field} />;
    case "textarea":
      return <TextArea field={field} />;
    case "website":
      return <Website field={field} />;
    default:
      return <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>;
  }
}