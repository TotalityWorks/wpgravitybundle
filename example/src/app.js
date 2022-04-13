import React from 'react'
import { render } from 'react-dom'
import GravityForm, { useGravityFormMutation } from '../../src'

// import address from '../../src/data/address.json'
// import button from '../../src/data/button.json'
// import checkbox from '../../src/data/checkbox.json'
// import consent from '../../src/data/consent.json'
// import date from '../../src/data/date.json'
// import email from '../../src/data/email.json'
// import name from '../../src/data/name.json'
// import phone from '../../src/data/phone.json'
// import otherName from '../../src/data/otherName.json'
// import select from '../../src/data/select.json'
// import text from '../../src/data/text.json'
// import textarea from '../../src/data/textarea.json'
// import website from '../../src/data/website.json'
import query from '../../src/data/query.json'

// const fields = [
//     address,
//     checkbox,
//     consent,
//     date,
//     email,
//     name,
//     phone,
//     otherName,
//     select,
//     text,
//     textarea,
//     website
// ]

const form = query.data.gravityFormsForm;
const buttonClass = 'btn btn-primary';

const handleSubmit = (values) => {
    return console.log(values)
}

const App = ({ form, buttonClass }) => {
    const gravityFormMutation = useGravityFormMutation(form)

    return (
        <>
            <GravityForm 
                form={form} 
                onSubmit={handleSubmit}
                buttonClass={buttonClass} 
            />
        
            <pre>{gravityFormMutation}</pre>
        </>
    )
}

render(
    <App form={form} buttonClass={buttonClass} />,
    document.getElementById('root')
);