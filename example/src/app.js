import React from 'react'
import { render } from 'react-dom'
import GravityForm from '../../src'

import address from '../../src/data/address.json'
import button from '../../src/data/button.json'
import checkbox from '../../src/data/checkbox.json'
import consent from '../../src/data/consent.json'
import date from '../../src/data/date.json'
import email from '../../src/data/email.json'
import name from '../../src/data/name.json'
import phone from '../../src/data/phone.json'
import otherName from '../../src/data/otherName.json'
import text from '../../src/data/text.json'
import textarea from '../../src/data/textarea.json'

const fields = [
    address,
    checkbox,
    consent,
    date,
    email,
    name,
    phone,
    otherName,
    text,
    textarea
]

const handleSubmit = (values) => {
    return console.log(values)
}

render(
    <GravityForm 
        fields={fields} 
        button={button} 
        onSubmit={handleSubmit}
    />,
    document.getElementById('root')
);