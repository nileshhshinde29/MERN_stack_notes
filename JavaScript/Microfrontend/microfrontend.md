## Micro frontend:

- Used for breaking down large application into multiple small applications.
- Different teams can use and deploy apps individually.
- each team can use their own UI, can be use different technologies.

### Advantages:

- individually work.
- Independent deployment.
- if one module is failed still main app run.

# Steps:

1. Create one main app.(Host app)
   Also create secondary apps for module.

2. In Child app need to add remote entry to expose this particular component.

```js
// webpack.config.js (Child)

Plugin:[
    new ModuleFederationPlugin({
         name: "productApp",
         filename: "remoteEntry.js",
         exposes: {
                  "./ProductCard": "./src/ProductCard",
                 },
            });
        ]
```

3. In host app we need to add remotes to access remotely exposed modules.

```js
// webpack.config.js (Host)

Plugin:[
         new ModuleFederationPlugin({
         name: "hostApp",

         remotes: {
             productApp:
                "productApp@http://localhost:3001/remoteEntry.js",
            },
        });
]
```
