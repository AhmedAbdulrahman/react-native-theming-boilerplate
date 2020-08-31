module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es6: true,
  },
  extends: ['plugin:import/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 8, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['react', 'react-hooks', 'react-native'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  /**
   * Sorted alphanumerically within each group. built-in and each plugin form
   * their own groups.
   */
  rules: {
    'arrow-body-style': 'off', // Don't enforce, readability firsthand.
    'consistent-this': ['error', 'self'],
    'linebreak-style': 'off', // Doesn't play nicely with Windows
    'no-use-before-define': 'off',
    // just as bad as "max components per file"
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    // Strict, airbnb is using warn; allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-constant-condition': 'error',
    // Airbnb use error
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'nonblock-statement-body-position': 'error',
    // Airbnb restricts isNaN and isFinite which are necessary for IE 11
    // we have to be disciplined about the usage and ensure the Number type for its
    // arguments
    'no-underscore-dangle': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-destructuring': 'off', // Destructuring harm grep potential.

    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    // It's buggy
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'react/jsx-handler-names': [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    // not a good rule for components close to the DOM
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'error',
    // Strict, airbnb is using off
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off',
    'react/no-multi-comp': 'off',
    'react/style-prop-object': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',
    // This depends entirely on what you're doing. There's no universal pattern
    'react/state-in-constructor': 'off',
    // stylistic opinion. For conditional assignment we want it outside, otherwise as static
    'react/static-property-placement': 'off',

    'import/namespace': ['error', { allowComputed: true }],
    'import/no-extraneous-dependencies': 'off', // It would be better to enable this rule.
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['error', { additionalHooks: 'useEnhancedEffect' }],

    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
  },
}
