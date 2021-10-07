# WP Gravity Bundle

Headless WordPress is the future of WordPress, and WPGraphQL is at it's helm. With WPGraphQL for Gravity Forms, you can harness the power of Gravity Forms for your headless website. This package is a collection of form field templates that you can just plug directly into your React app, give it your GraphQL data, and go. This package was built with Gatsby.js in mind and has not been tested for any other React framework.

## Installation

To install this package simply run

`npm install wpgravitybundle`

## Use

To use this package, simply import it and call it with the appropriate props:

``` 
import React from 'react';
import { graphql } from 'gatsby';
import { FormFields, Button } from 'wpgravitybundle';

export default function Example({ data }) {
    const formFields = data.gravityFormsForm.formFields.nodes;
    const { type, text } = data.gravityFormsForm.lastPageButton;
    return (
        <>
        <FormFields fields={formFields} />
        <Button type={type} text={text} />
        </>
    )
}

export const query = graphql`
    query {
        gravityFormsForm(id: 50, idType: DATABASE_ID) {
            formId
            cssClass
            dateCreated
            formFields {
                nodes {
                    id
                    type
                    ... on TextField {
                        label
                        description
                    }
                }
            }
            lastPageButton {
                text
                type
            }
            title
        }
    }
`
```

## Supported Fields

| Field       | Props       |
| ----------- | ----------- |
| Address     | {props}     |
| Checkbox    | {props}     |
| Date        | {props}     |
| Email       | {props}     |
| MultiSelect | {props}     |
| Name        | {props}     |
| Phone       | {props}     |
| Radio       | {props}     |
| Select      | {props}     |
| Text        | {props}     |
| TextArea    | {props}     |
| Time        | {props}     |
| Website     | {props}     |


## Inspiration

This package was inspired by the work of Kellen Mace (https://twitter.com/kellenmace) of WP Engine and his public Github repository: https://github.com/kellenmace/gravity-forms-in-headless-wordpress-gatsby.