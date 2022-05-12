import React from 'react';
import Form from './Form';

import { FormProvider } from '../formContext';

const GravityForm = ({ form, buttonClass, onSubmit }) => {
    return (
        <FormProvider>
            <Form form={form} buttonClass={buttonClass} onSubmit={onSubmit} />
        </FormProvider>
    )
}

export default GravityForm;
