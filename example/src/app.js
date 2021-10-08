import React from 'react'
import { render } from 'react-dom'
import { FormsField } from '../../src'
import name from '../../src/data/name.json'
import email from '../../src/data/email.json'

render(
    <>
        <FormsField field={name} />
        <FormsField field={email} />
    </>, 
    document.getElementById('root')
);