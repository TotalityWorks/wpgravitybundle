# WP Gravity Bundle

Headless WordPress is the future of WordPress, and WPGraphQL is at it's helm. With WPGraphQL for Gravity Forms, you can harness the power of Gravity Forms for your headless website. This package is a collection of form field templates that you can just plug directly into your React app, give it your GraphQL data, and go.

## Installation

To install this package simply run

`npm install wpgravitybundle`

## Use

To use this package, import the form component and the hook.
The GravityForm component expects three props: form, buttonClass, and onSubmit.
Since this package is built to use with `WPGraphQL for Gravity Forms` WordPress plugin by Harness Software, it expects a specific json object for each field.
`form` should be the data.gravityFormsForm object you receive from your query.
`buttonClass` is an optional prop for additional styling control.
This should be a string.
The `onSubmit` prop is expecting a function that is called when the form is submitted.

Internally, the package will map through your fields, display them, and handle state and validation.
It will also use the form data to create the necessary GraphQL Mutation to submit the form data.
The form values are passed into your onSubmit function when the form is submitted.
They are already preformatted so that all you need to do is pass the values into your mutation as an object: `{ variables: values }`.

Example Use:

``` js
import React from 'react';
import { graphql } from 'gatsby';
import { useMutation, gql } from '@apollo/client';
import GravityForm, { useGravityFormMutation } from "wpgravitybundle"

export default function Example({ data }) {
    const form = data.gravityFormsForm;
    const buttonClass = "btn-primary"
   
    const gravityFormMutation = useGravityFormMutation(form);
    const SUBMIT_FORM = gql`${gravityFormMutation}`
    const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);

    const handleSubmit = (values) => {
        return submitForm({ variables: values })
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
                form={form} 
                onSubmit={handleSubmit}
                buttonClass={buttonClass}
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
            formFields {
                nodes {
                    id
                    type
                    ... on TextField {
                        label
                        size
                        description
                        defaultValue
                        isRequired
                        placeholder
                        visibility
                    }
                }
            }
            button {
                text
                type
            }
        }
    }
`
```

<!-- ## Supported Fields

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
| Website     | {props}     | -->


## Inspiration

This package was inspired by the work of Kellen Mace (https://twitter.com/kellenmace) of WP Engine and his public Github repository: https://github.com/kellenmace/gravity-forms-in-headless-wordpress-gatsby.

## Say Thank You

If you enjoy using WPGravityBundle and want to say thank you, you can buy me a coffee:
<a href="https://www.buymeacoffee.com/mosesintech" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"></a>

## I'm also currently looking for work!

I am a React programmer through and through.
I have been working with WordPRess for 13 years, and React/Node for 4.
Headless WordPress is definitely a passion of mine, and I would love the opportunity to help your team with their headless projects.
You can find me at moses@totalityworks.com!