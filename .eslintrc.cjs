
/* eslint-disable */
// Código donde se deshabilitan todas las reglas temporalmente

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react'],
  rules: {
    // Aquí puedes dejar reglas específicas que desees habilitadas
  },
}

