const { resolve } = require

const OFF = 0
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      },
      typescript: {
        directory: [resolve('./tsconfig.json'), resolve('./build/tsconfig.json')]
      }
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never'
      }
    ],
    'func-names': OFF,
    'no-console': OFF
  },
  overrides: [
    {
      files: ['build/**/*.ts', 'scripts/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': OFF,
        'no-underscore-dangle': OFF
      }
    }
  ]
}
