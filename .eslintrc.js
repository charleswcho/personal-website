module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
    'jsx-a11y'
  ],
  'rules': {
    "jsx-a11y/label-has-for": 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
