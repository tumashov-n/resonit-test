module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    semi: 'off',
    'space-before-blocks': 'off',
    indent: ['error', 4],
    'vue/html-indent': ['error', 4], 
    'key-spacing': 'off',
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off',
    'dot-notation': 'off',
    'no-prototype-builtins': 'off',
    'quote-props': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/valid-v-for': 'off',
    'unicorn/prefer-includes': 'off',
    'vue/no-v-html': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': ['error', {
      'ignores': []
    }]
  }
}
