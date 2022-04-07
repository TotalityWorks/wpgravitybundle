import React from 'react'
import { render } from 'react-dom'
import GravityForm from '../../src'

import button from '../../src/data/button.json'
import email from '../../src/data/email.json'
import name from '../../src/data/name.json'
import otherName from '../../src/data/otherName.json'
import text from '../../src/data/text.json'
import textarea from '../../src/data/textarea.json'

const fields = [
    name,
    otherName,
    email,
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