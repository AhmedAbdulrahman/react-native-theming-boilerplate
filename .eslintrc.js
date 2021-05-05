const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es6: true,
  },
  extends: ['plugin:import/recommended', 'airbnb', 'prettier'],
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
      'babel-module': {},
      alias: [
        ['src', './src/**'],
        ['components', './src/components/'],
        ['containers', './src/containers/'],
        ['screens', './src/screens/'],
        ['styles', './src/styles/'],
        ['constants', './src/constants/'],
        ['navigation', './src/styles/'],
        ['i18n', './src/i18n/'],
        ['hooks', './src/hooks/'],
        ['storage', './src/storage/'],
        ['utils', './src/utils/'],
        ['blocks', './src/blocks/'],
      ],
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
    'arrow-body-style': OFF, // Don't enforce, readability firsthand.
    'consistent-this': [ERROR, 'self'],
    'linebreak-style': OFF, // Doesn't play nicely with Windows
    'no-use-before-define': OFF,
    // just as bad as "max components per file"
    'max-classes-per-file': OFF,
    'no-alert': ERROR,
    // Strict, airbnb is using warn; allow warn and error for dev environments
    'no-console': [ERROR, { allow: ['warn', '2'] }],
    'no-constant-condition': ERROR,
    // Airbnb use error
    'no-param-reassign': OFF,
    'no-prototype-builtins': OFF,
    'nonblock-statement-body-position': ERROR,
    // Airbnb restricts isNaN and isFinite which are necessary for IE 11
    // we have to be disciplined about the usage and ensure the Number type for its
    // arguments
    'no-underscore-dangle': ERROR,
    'prefer-arrow-callback': [ERROR, { allowNamedFunctions: true }],
    'prefer-destructuring': OFF, // Destructuring harm grep potential.

    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': OFF,
    'react/destructuring-assignment': OFF,
    // 'react/jsx-indent-props': [WARNING, 'tab'],
    // It's buggy
    'react/forbid-prop-types': OFF,
    'react/jsx-curly-brace-presence': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }], // airbnb is using .jsx
    'react/jsx-handler-names': [
      ERROR,
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    // not a good rule for components close to the DOM
    'react/jsx-props-no-spreading': OFF,
    'react/no-danger': ERROR,
    // Strict, airbnb is using off
    'react/no-direct-mutation-state': ERROR,
    'react/no-find-dom-node': OFF,
    'react/no-multi-comp': OFF,
    'react/style-prop-object': OFF,
    'react/require-default-props': OFF,
    'react/sort-prop-types': OFF,
    // This depends entirely on what you're doing. There's no universal pattern
    'react/state-in-constructor': OFF,
    // stylistic opinion. For conditional assignment we want it outside, otherwise as static
    'react/static-property-placement': OFF,

    'import/prefer-default-export': OFF,
    'import/no-absolute-path': [ERROR, { esmodule: false, commonjs: false, amd: false }],
    'import/namespace': [ERROR, { allowComputed: true }],
    'import/no-extraneous-dependencies': OFF, // It would be better to enable this rule.
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': [ERROR, { additionalHooks: 'useEnhancedEffect' }],
    'jsx-a11y/anchor-is-valid': OFF,
    'react-native/no-unused-styles': WARNING,
    'react-native/split-platform-components': ERROR,
    'react-native/no-inline-styles': WARNING,
    'react-native/no-color-literals': OFF,
    'react-native/no-raw-text': OFF,
  },
  globals: {
    __DEV__: true,
  },
}
