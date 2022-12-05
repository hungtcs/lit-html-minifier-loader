# Lit HTML Minifier Loader

## Installation

```shell
npm i -D lit-html-minifier-loader
```

```typescript
module: {
  rules: [
    {
      test: /\.element\.ts$/,
      use: [
        {
          loader: 'ts-loader',
        },
        // add this loader after ts-loader
        {
          loader: 'lit-html-minifier-loader',
          options: {
            debug: true,
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
