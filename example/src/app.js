import React from 'react'
import { render } from 'react-dom'
import { FormsField } from '../../src'
import name from '../../src/data/name.json'
import email from '../../src/data/email.json'
import textArea from '../../src/data/textarea.json'
import phone from '../../src/data/phone.json'

render(
    <>
        <FormsField field={name} />
        <FormsField field={email} />
        <FormsField field={textArea} />
        <FormsField field={phone} />
    </>, 
    document.getElementById('root')
);