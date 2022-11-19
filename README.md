# Getting Started

This is a template repo which has a main purpose of being the initial state for all of my web applications.

## Dependencies

These are the following resources:

- [Next.js V13](https://nextjs.org/) - learn about Next.js features and API.
- [CommitLint](https://www.conventionalcommits.org/en/v1.0.0/#summary) - an enforced commit style guide to ensure consistant and readable commits.
- [EsLint AirBnb](https://www.npmjs.com/package/eslint-config-airbnb) - following the style guides for the popular airbnb eslint plugin.
- [Husky](https://github.com/typicode/husky) - use to run linting before commits are made.

Optionally add [Jest](https://jestjs.io/docs/tutorial-react) to the repo and run these following commands

``` 
npm install --save-dev react-test-renderer
```
after, run the husky command to ensure testing before commits

```
npx husky set .husky/pre-commit "npm run lint && npm run test"
```

## Contributions

Any contribution/feed back would be greatly appreciated

Happy Coding 🚀
