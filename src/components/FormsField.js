import React from 'react';

import Email from './FormFields/Email';
import Name from './FormFields/Name';
import Text from './FormFields/Text';

export default function FormsField({ field, state, setFormData }) {
  switch (field.type) {
    case "email":
      return <Email field={field} state={state} setFormData={setFormData} />;
    case "name":
      return <Name field={field} state={state} setFormData={setFormData} />;
    case "text":
      return <Text field={field} state={state} setFormData={setFormData} />;
    default:
      return <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>;
  }
}