module.exports = {
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    rules: {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "no-console": "off",
        "no-multiple-empty-lines": ["error", {
            "max": 1,
            "maxEOF": 0,
            "maxBOF": 0
        }],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "space-before-function-paren": ["error", "always"],
        "eqeqeq": ["error", "always"]
    }
};