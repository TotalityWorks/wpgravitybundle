import React, { useEffect } from 'react';

import { useFormContext } from '../formContext';
import FormsField from './FormsField';
import Button from './Button';

export default function Form({ form, buttonClass, onSubmit }) {
  const fields = form.formFields.nodes;
  const { button } = form;
  const { state, dispatch } = useFormContext();

  const requiredFields = fields.map((field) => {
    if (field.type === 'name') {
      if (field.isRequired) {
        const value = `${field.type}${field.id}`;
        const prefixInput = field?.inputs?.find((input) => input.key === 'prefix');
        const firstInput = field?.inputs?.find((input) => input.key === 'first');
        const middleInput = field?.inputs?.find((input) => input.key === 'middle');
        const lastInput = field?.inputs?.find((input) => input.key === 'last');
        const suffixInput = field?.inputs?.find((input) => input.key === 'suffix');

        const prefix = prefixInput && !prefixInput.isHidden && `${value}Prefix` || 'not required';
        const first = firstInput && !firstInput.isHidden && `${value}First` || 'not required';
        const middle = middleInput && !middleInput.isHidden && `${value}Middle` || 'not required';
        const last = lastInput && !lastInput.isHidden && `${value}Last` || 'not required';
        const suffix = suffixInput && !suffixInput.isHidden && `${value}Suffix` || 'not required';
        const requiredNameFields = [prefix, first, middle, last, suffix];
        const filterNameFields = requiredNameFields.filter((field) => field !== 'not required');

        return filterNameFields;
      }
      return 'not required';
    }
    if (field.type === 'address') {
      if (field.isRequired) {
        const { type, id } = field;
        const streetId = `${type}${id}Street`;
        const lineTwoId = `${type}${id}LineTwo`;
        const cityId = `${type}${id}City`;
        const stateId = `${type}${id}State`;
        const zipId = `${type}${id}Zip`;
        const countryId = `${type}${id}Country`;

        const requiredAddressFields = [streetId, cityId, stateId, zipId, countryId];
        return requiredAddressFields;
      }
      return 'not required';
    }
    if (field.isRequired) {
      return `${field.type}${field.id}`;
    }
    return 'not required';
  });
  const filteredRequiredFields = requiredFields.flat().filter((field) => field !== 'not required');

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = state.formData;
    return onSubmit(values);
  };

  useEffect(() => {
    dispatch({ type: 'ADD_REQUIRED_FIELDS', payload: filteredRequiredFields });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields && fields.map((field, id) => (
          <FormsField key={`${id}-${field.type}`} field={field} />
        ))}

        {button && (
        <Button
          type={button.type}
          text={button.text}
          cssClass={buttonClass}
          onClick={handleSubmit}
        />
        )}
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}
