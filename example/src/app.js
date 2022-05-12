import React, { useState } from 'react'
import { render } from 'react-dom'
import GravityForm, { useGravityFormMutation } from '../../src'

import query from '../../src/data/query.json'
const form = query.data.gravityFormsForm;
const buttonClass = 'btn btn-primary';

const App = ({ form, buttonClass }) => {
    const [data, setData] = useState();
    
    const handleSubmit = (values) => {
        const formData = values;
        return setData(formData)
    }

    const gravityFormMutation = useGravityFormMutation(form)

    return (
        <>
            {data ? 
                <>
                    <p>Data Submitted</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </> 
            : 
                <>
                    <GravityForm 
                        form={form} 
                        onSubmit={handleSubmit}
                        buttonClass={buttonClass} 
                    />
                </>
            }
            <pre>{gravityFormMutation}</pre>
        </>
    )
}

render(
    <App form={form} buttonClass={buttonClass} />,
    document.getElementById('root')
);