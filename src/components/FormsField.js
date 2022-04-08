import React from 'react';

import Address from './FormFields/Address';
import Checkbox from './FormFields/Checkbox';
import Consent from './FormFields/Consent';
import Date from './FormFields/Date';
import Email from './FormFields/Email';
import Name from './FormFields/Name';
import Text from './FormFields/Text';
import TextArea from './FormFields/TextArea';

export default function FormsField({ field, state, setFormData }) {
  switch (field.type) {
    case "address":
      return <Address field={field} state={state} setFormData={setFormData} />;
    case "checkbox":
      return <Checkbox field={field} state={state} setFormData={setFormData} />;
    case "consent":
      return <Consent field={field} state={state} setFormData={setFormData} />;
    case "date":
      return <Date field={field} state={state} setFormData={setFormData} />;
    case "email":
      return <Email field={field} state={state} setFormData={setFormData} />;
    case "name":
      return <Name field={field} state={state} setFormData={setFormData} />;
    case "text":
      return <Text field={field} state={state} setFormData={setFormData} />;
    case "textarea":
      return <TextArea field={field} state={state} setFormData={setFormData} />;  
    default:
      return <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>;
  }
}