import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import FormsField from './FormsField';
import Button from './Button';

export default function Form({ fields, button }) {
    const [formData, setFormData] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setFormData(data);

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(field => (
                <FormsField field={field} register={register} />
            ))}
            <Button type={button.type} text={button.text} />
        </form>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        </>
    )
}