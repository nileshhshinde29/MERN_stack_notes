# Micro frontend:
- Used for breaking down large application into multiple small applications.
- Different teams can use and deploy apps individually.
- each team can use their own UI, can be use different technologies.

## Advantages:
- individually work.
- Independent deployment.
- if one module is failed still main app run.

## Steps:
1. Create one main app.(Host app)
   Also create secondary apps for module.

2. In Child app need to add remote entry to expose this particular component.

```js
// webpack.config.js (Child)

Plugins:[
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

Plugins:[
         new ModuleFederationPlugin({
         name: "hostApp",

         remotes: {
             productApp:
                "productApp@http://localhost:3001/remoteEntry.js", // productApp is the name of remote component that we have exposed in Child
            },
        });
]
```

- inside the host app we can use like this.
   -- we need to import lazy loading  
   -- need to add <b>Suspense</b> and <b>fallback</b>

```js
import React, { Suspense } from "react";

const ProductCard = React.lazy(() =>
  import("productApp/ProductCard")
);

function App() {
  return (
    <div>
      <h1>Host App</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductCard />
      </Suspense>
    </div>
  );
}

export default App;

```

