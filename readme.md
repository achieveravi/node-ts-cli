# Node Typescript Boilerplage

Here is the basic debug config

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Test Server",
            "sourceMaps": true,
            "trace": true,
            "program": "${workspaceFolder}/src/index.ts",
            "outFiles": [
                "${workspaceFolder}/dist/**/*.js"
            ],
            "console": "internalConsole"
        }
    ]
}
```