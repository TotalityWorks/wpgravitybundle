# Contributing

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's few guidelines that should help you as you prepare
your contribution.

## Initial steps

Before you start working on a contribution, create an issue describing what you want to build. It's possible someone else is already working on something similar, or perhaps there is a reason that feature isn't implemented. The maintainers will point you in the right direction.

## Submitting a Pull Request

- Fork the repo
- Clone your forked repository: `git clone git@github.com:{your_username}/wpgravitybundle.git`
- Enter the wpgravitybundle directory: `cd wpgravitybundle`
- Create a new branch off the `master` branch: `git checkout -b your-feature-name`
- Implement your contributions (see the Development section for more information)
- Push your branch to the repo: `git push origin your-feature-name`
- Go to https://github.com/TotalityWorks/wpgravitybundle/compare and select the branch you just pushed in the "compare:" dropdown
- Submit the PR. The maintainers will follow up ASAP.

## Development

The following steps will get you setup to contribute changes to this repo:

1. Run `npm install` to install dependencies.

2. Run `npm run start` to start the example instance.
The example will be live at localhost:3001 and comes from the `/example` directory. `example/src/app.tsx` uses form data from `example/data/query.json` to create the example form and the mutation. Below the example form is the form state, and below that is the mutation returned from the `useGravityFormMutation` hook.

3. Develop your feature like a boss.

4. Run `git add .` and `npm run commit` to commit your changes. This repo uses commitizen and commitlint to support consistent, readable, and meaningful commit messages. Commit messages should follow this format: `feat(fields): add CAPTCHA field component`. To understand the types of commit messages you can use, see the config option in `package.json`. The value in the (parenthesis) is the scope of the commit. For example, if you are adding field support then the scope is `(fields)`.

### Field Support

There are a few things to note if you intend on adding support for a new field.
First, this package is meant to complement the work done with the `WPGraphQL for Gravity Forms` WordPress plugin.
If there is a field that they do not support, then we cannot add support for it either.

Second, testing your field support is as easy as adding field data to `example/data/query.json` and running `npm run start`.

NOTE: `databaseId` should be a unique number among fields in a form.

Your field data should come from querying a WordPress instance that has the plugins `WPGraphQL` and `WPGraphQL for Gravity Forms` installed. In your WordPress instance, navigate to your GraphiQL IDE and add a query like this:

```query NewQuery {
  gfForms {
    edges {
      node {
        formFields {
          nodes {
            ... on PasswordField {
              databaseId
            }
          }
        }
      }
    }
  }
}
```

Replace `PasswordField` with the field you would like to add support for. Make sure that your field has at least it's `databaseId`, `type`, `label`, `cssClass`, `size`, `isRequired`, `pageNumber`, and any other items unique to that field that are needed in the JSX.

Before beginning your work, I would recommend looking at the fields currently supported and attempt, as much as makes sense, to match their implementation.

### Documentation

The WPGravityBundle documentation lives in the README.md. Be sure to document any changes you implement.

## License

By contributing your code to the WPGravityBundle GitHub repository, you agree to
license your contribution under the MIT license.

### Thank You

Thank you for your interest in contributing. I (@mosesintech) really do appreciate it!