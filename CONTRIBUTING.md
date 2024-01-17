# Contributing 💻

All contributions are welcome and greatly appreciated!

## Steps to Contribute 💡

> Download [nodenv](https://github.com/nodenv/nodenv) which uses this file and manages your Node.js versions for you

1. Fork this repository
2. Commit your changes
3. Test your changes (learn how to test below)
4. Open a pull request back to this repository
   > Make sure to run `npm run build` as your final commit!
5. Notify the maintainers of this repository for peer review and approval
6. Merge!

The maintainers of this repository will create a new release with your changes so that everyone can use the new release and enjoy the awesome features of this Action

## Testing 🧪

This project requires **100%** test coverage

### Running the test suite (required)

Simply run the following command to execute the entire test suite:

```bash
npm run test
```

> Note: this requires that you have already run `npm install`

### Testing FAQs 🤔

Answers to questions you might have around testing

Q: Why do I have to commit my changes to `main`?

A: The `on: issue_comment` workflow only uses workflow files from the `main` branch by design - [learn more in the branch-deploy repo](https://github.com/github/branch-deploy#security-)

Q: How can I test my changes once my PR is merged and _before_ a new release is created?

A: You should create a sample repos with a sample workflow that use the action to test
