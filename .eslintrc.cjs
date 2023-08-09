module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  //ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'src'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.base.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": [
          "arrow-function",
          "function-declaration"
        ]
      }
    ],
  },
}
