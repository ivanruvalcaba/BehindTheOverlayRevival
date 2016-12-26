module.exports = {
    "env": {
        "browser": true,
        "webextensions": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-var": [
            "error"
        ],
        "default-case": [
            "error"
        ],
        "no-console": [
            "off"
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "strict": [
            "error",
            "safe"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ]
    }
};
