# Lit HTML Minifier Loader

## Installation

```shell
npm i -D lit-html-minifier-loader
```

```typescript
module: {
  rules: [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
        },
        // add this loader after ts-loader
        {
          loader: 'lit-html-minifier-loader',
          options: {
            debug: false,
            htmlMinifierOptions: {
              caseSensitive: true,
              collapseWhitespace: true,
            }
          }
        }
      ],
      include: [
        path.join(__dirname, './src'),
      ]
    },
    // ...
  ],
  /// 
}
```
