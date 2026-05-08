#Micro frontend:

- Used for breaking down large application into multiple small applications.
- Different teams can use and deploy apps individually.
- each team can use their own UI, can be use different technologies.

#Advantages:

- individually work.
- Independent deployment.
- if one module is failed still main app run.

#Steps:

1. Create one main app.(Host app)
   Also create secondary apps for module.

2. In Child app need to add remote entry to expose this particular component.

<code>
webpack.config.js

Plugin:[
    new ModuleFederationPlugin({
         name: "productApp",
         filename: "remoteEntry.js",
         exposes: {
                  "./ProductCard": "./src/ProductCard",
                 },
            });
        ]
</code>
