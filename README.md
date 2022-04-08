# WP Gravity Bundle

Headless WordPress is the future of WordPress, and WPGraphQL is at it's helm. With WPGraphQL for Gravity Forms, you can harness the power of Gravity Forms for your headless website. This package is a collection of form field templates that you can just plug directly into your React app, give it your GraphQL data, and go.

## Installation

To install this package simply run

`npm install wpgravitybundle`

## Use

To use this package, import the form component.
The GravityForm component expects three props: fields, button, and onSubmit.
Since this package is built to use with `WPGraphQL for Gravity Forms` WordPress plugin by Harness Software, it expects a specific json object for each field.
Fields should be the formFields.nodes object you receive from your query.
Button is expecting an object that includes type and text.
The onSubmit prop is expecting a function that is called when the form is submitted.

Internally, the package will map through your fields, display them, and handle state and validation.
The form values are passed into your onSubmit function when the form is submitted and can be accessed by `values.${type}${id}`.

Example Use:

``` 
import React from 'react';
import { graphql } from 'gatsby';
import { useMutation, gql } from '@apollo/client';
import GravityForm from 'wpgravitybundle';

export default function Example({ data }) {
    const formFields = data.gravityFormsForm.formFields.nodes;
    const buttonData = data.gravityFormsForm.lastPageButton;

    const SUBMIT_FORM = gql`
        mutation SubmitForm($textValue: String!) {
            submitGravityFormsForm(
                input: {
                    formId: 50
                    fieldValues: [
                        {
                        id: 1
                        value: $textValue
                        }
                    ]
                    saveAsDraft: false
                    sourcePage: 1
                    targetPage: 0
                }
            ) {
                errors {
                    id
                    message
                }
                entryId
                resumeToken
                entry {
                    id
                }
            }
        }
    `;

    const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);

    const handleSubmit = (values) => {
        return submitForm({ variables: { textValue: values.text1 } });
    }

    if(loading) {
        return (<p>Loading... </p>)
    }

    if(error) {
        return (<p>There was an error submitting the form.</p>)
    }
    
    if(data) {
        return (<p>Thank you for contacting us! We'll be sure to reply soon!</p>)
    }

    return (
        <>
            <GravityForm 
                fields={formFields} 
                button={buttonData} 
                onSubmit={handleSubmit}
            />
        </>
    )
}

export const query = graphql`
    query {
        gravityFormsForm(id: 50, idType: DATABASE_ID) {
            title
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
                        defaultValue
                        isRequired
                        placeholder
                        visibility
                    }
                }
            }
            lastPageButton {
                text
                type
            }
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