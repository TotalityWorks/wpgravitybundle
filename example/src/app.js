import React from 'react'
import { render } from 'react-dom'
import { ExampleComponent } from '../../src'
import { AnotherComponent } from '../../src'

render(
    <>
        <ExampleComponent words='dope' />
        <AnotherComponent />
    </>, 
    document.getElementById('root')
);