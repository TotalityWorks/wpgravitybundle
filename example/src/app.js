import React from 'react'
import { render } from 'react-dom'
import GravityForm from '../../src'

import name from '../../src/data/name.json'
import otherName from '../../src/data/otherName.json'
import button from '../../src/data/button.json'

const fields = [
    name,
    otherName
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