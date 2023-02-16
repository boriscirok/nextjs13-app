// eslint-disable-next-line @typescript-eslint/no-var-requires,import/extensions
const prettierConfig = require('./.prettierrc.cjs')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ], // prettier must be the last one
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier', 'vitest'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    DEBUG: true
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
      alias: {
        map: [['SvgComponents', './src/img/ico-svg']]
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Strict mode
    strict: ['error', 'never'],
    // Code style
    'no-console': 'off',
    'no-alert': 'off',
    // require let or const instead of var
    'no-var': 'error',
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    camelcase: ['error', { allow: ['^opt_'] }],
    'func-names': 0,
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNewExceptions: ['Velocity'],
        capIsNewExceptionPattern: 'Mixin'
      }
    ],
    'no-array-constructor': 'error',
    'no-nested-ternary': 0,
    'no-new-object': 'error',
    'no-underscore-dangle': 0,
    'one-var': ['warn', 'never'],
    'spaced-comment': [
      'warn',
      'always',
      {
        exceptions: ['-', '+'],
        markers: ['=', '!']
      }
    ],
    'consistent-return': 'error',
    'default-case': 0,
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],
    'guard-for-in': 'error',
    'no-with': 'error',
    'no-return-assign': 'error',
    'no-proto': 'error',
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 0,
    radix: ['error', 'as-needed'],
    'space-unary-ops': 'error',
    'array-bracket-spacing': 'error',
    'prefer-spread': 0,
    'no-prototype-builtins': 0,

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
    // specify curly brace conventions for all control statements
    curly: ['error'],

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    yoda: 'error',

    // React
    'react/display-name': 0,
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-max-props-per-line': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 0,
    'react/no-set-state': 0,
    'react/no-access-state-in-setstate': 'error',
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 'error',
    'react/prop-types': 0,
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'instance-variables',
          'static-methods',
          'setters',
          'getters',
          'lifecycle',
          'handlers',
          'accessors',
          'checkers',
          'initializers',
          'everything-else',
          'rendering'
        ],
        groups: {
          handlers: ['/^on.+$/', '/^handle.+$/', '/^.+Handler$/'],
          accessors: ['/^set.+$/', '/^get.+$/'],
          checkers: ['/^is.+$/', '/^has.+$/', '/^can.+$/', '/^should.+$/'],
          initializers: ['/^init.+$/'],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/jsx-wrap-multilines': 'error',

    // React-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        tsx: 'never',
        ts: 'never'
      }
    ],

    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // TODO: enforce a stricter convention in module import order?
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']], alphabetize: { order: 'asc', caseInsensitive: false } }
    ],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Ensures that there are no useless path segments
    // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b'error'ac'error'a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    'yield-star-spacing': ['error', 'after'],

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // disallow usage of expressions in statement position
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    // Typescript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-interface': 0, // allow Type for simple objects
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': ['error'], // highway to hell
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/interface-name-prefix': 0, // this is not Java
    '@typescript-eslint/ban-ts-comment': 0, // import JS in TS need @ts-ignore
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // no interface definitions

    '@typescript-eslint/no-empty-function': 0, // we should enable this eventually
    '@typescript-eslint/no-use-before-define': 0, // we should enable this eventually

    // Prettier
    'prettier/prettier': ['error', prettierConfig],

    // Vitest
    'vitest/consistent-test-it': ['error', { fn: 'test' }],
    'vitest/expect-expect': 'error',
    'vitest/lower-case-title': 'warn',
    'vitest/max-nested-describe': ['error', { max: 3 }],
    'vitest/no-conditional-tests': 'error',
    'vitest/no-focused-tests': 'warn',
    'vitest/no-identical-title': 'error',
    'vitest/no-skipped-tests': 'error',

    // Custom rules
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-router',
            message: 'Please use `react-router-dom` instead. '
          }
        ]
      }
    ]
  }
}
