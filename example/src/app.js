import React from 'react'
import { render } from 'react-dom'
import { FormsField, Button } from '../../src'

import name from '../../src/data/name.json'
import email from '../../src/data/email.json'
import textArea from '../../src/data/textarea.json'
import phone from '../../src/data/phone.json'
import text from '../../src/data/text.json'
import select from '../../src/data/select.json'
import date from '../../src/data/date.json'
import time from '../../src/data/time.json'

import button from '../../src/data/button.json'

render(
    <form>
        <FormsField field={name} />
        <FormsField field={email} />
        <FormsField field={textArea} />
        <FormsField field={phone} />
        <FormsField field={text} />
        <FormsField field={select} />
        <FormsField field={date} />
        <FormsField field={time} />
        <Button type={button.type} text={button.text} />
    </form>, 
    document.getElementById('root')
);