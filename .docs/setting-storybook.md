# install storybook

```
yarn add -D @storybook/react @babel/core babel-loader babel-preset-react-app @storybook/addon-controls @storybook/addon-essentials @storybook/addon-links
```

# install Babel packages

```
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-flow @babel/preset-typescript @babel/plugin-transform-runtime babel-jest babel-loader babel-plugin-transform-es2015-modules-commonjs @babel/plugin-transform-runtime
```

# create files

> mkdir .storybook

> touch .storybook/main.js babel.config.json

# set main.js

```
path = require("path");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  docs: {
    autodocs: true,
  },
};

```

# set babel.config.json

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-flow",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ],
  "env": {
    "development": {
      "plugins": ["transform-es2015-modules-commonjs"]
    },
    "test": {
      "plugins": [
        "transform-es2015-modules-commonjs",
        "@babel/plugin-proposal-class-properties"
      ],
      "presets": ["@babel/preset-react"]
    }
  }
}

```

# run storybook

> yarn storybook
