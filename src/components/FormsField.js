import React from 'react';

import Name from './FormFields/Name';

export default function FormsField({ field, state, setFormData }) {
  switch (field.type) {
    case "name":
      return <Name field={field} state={state} setFormData={setFormData} />;
    default:
      return <p>{`This Gravity Forms field type is not currently supported: ${field.type}.`}</p>;
  }
}