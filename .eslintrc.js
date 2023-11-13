// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: 'standard',
    plugins: [
	  'vue',
        'html'
    ],
    'rules': {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': 'off',
        "eqeqeq": 0,
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-return-assign': 'off',
        "no-new": 'off',
        "camelcase": 'off'
    }
}
