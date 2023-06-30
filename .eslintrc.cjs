module.exports = {
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
    // 'plugin:jsx-a11y/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    // 'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    // '@typescript-eslint',
    // "import"
    // 'prettier',
  ],
  settings: {
    // react: {
    //   // Tells eslint-plugin-react to automatically detect the version of React to use.
    //   version: 'detect',
    // },
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    // // Tells eslint how to resolve imports
    // 'import/resolver': {
    //   node: {
    //     paths: ['src'],
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    //   typescript: {},
    // },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    // 'import/no-unresolved': 'error',
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
