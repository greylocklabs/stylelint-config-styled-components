# @greylocklabs/stylelint-config-styled-components

> Greylock Labs Stylelint rules for projects using Styled Components

---

[![npm version](https://badge.fury.io/js/%40greylocklabs%2Fstylelint-config-styled-components.svg)](https://badge.fury.io/js/%40greylocklabs%2Fstylelint-config-styled-components)

## Installation

Install the package and all of its peer dependencies:

```bash
$ npx install-peerdeps --dev @greylocklabs/stylelint-config-styled-components
```

Afterwards, create a `.stylelintrc` file in your root project folder and add the following:

```json
{
  "extends": "@greylocklabs/stylelint-config-styled-components"
}
```

## Configuration

To override anything, simply add a `rules` property to your `.stylelintrc`
file and add new or existing rules to it with your preferred settings:

```json
{
  "extends": "@greylocklabs/stylelint-config-styled-components",
  "rules": {
    "number-leading-zero": null
  }
}
```

## Need to lint CSS or HTML files?

Unfortunately, as of now Stylelint does not support using one config file
to target different file types. If your project uses any of the following:

1. `.css` or `.scss` files
2. Vue Single File Components
3. HTML files with inline styles

You should instead install
[@greylocklabs/stylelint-config](https://www.npmjs.com/package/@greylocklabs/stylelint-config).
It is capable of handling "everything else" when it comes to CSS styles.

Eventually, the goal is to merge the two projects together.

## Testing

To run tests for this package, install the development dependencies with
`npm install` from this folder and then run `npm test`.

## License

MIT License. See LICENSE file for details.
