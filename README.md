# secretify-action

## Description

Secretify-action helps you to replace your configs/settings key by their values you provide in parameters
Simplify secret/key management in your pipelines.

## Usage 📝

```yaml
name: <- Workflow-name ->

on:
    push:
        branches: [ main ]
    pull_request:
        branches: [ main ]

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
        - uses: actions/checkout@v2
        - name: Secretify settings files
            uses: wcontayon/secretify-action@latest
            with:
                path-file: "-- path to your settings/config files --"
                secrets-keys: "__key1__,__key2__,__key3__"
                secrets-values: "value1,value2,value3"
```

## Contributing 💻

All contributions are welcome from all!

Check out the [contributing guide](CONTRIBUTING.md) to learn more

## Licence

Informations sur la licence.
