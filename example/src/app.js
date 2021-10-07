import React from 'react'
import { render } from 'react-dom'
import { FormsField } from '../../src'
import name from '../../src/data/name.json'

render(
    <>
        <FormsField field={name} />
    </>, 
    document.getElementById('root')
);