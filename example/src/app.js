import React from 'react'
import { render } from 'react-dom'
import { FormsField } from '../../src'
import name from '../../src/data/name.json'
import email from '../../src/data/email.json'
import textArea from '../../src/data/textarea.json'
import phone from '../../src/data/phone.json'
import text from '../../src/data/text.json'
import select from '../../src/data/select.json'

render(
    <>
        <FormsField field={name} />
        <FormsField field={email} />
        <FormsField field={textArea} />
        <FormsField field={phone} />
        <FormsField field={text} />
        <FormsField field={select} />
    </>, 
    document.getElementById('root')
);