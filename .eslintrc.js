module.exports = {
    // 语言环境支持
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // 扩展
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: [2, 4],
        'no-undef': [0],
        'import/no-unresolved': [2, { ignore: ['virtual:generated-pages', 'virtual:windi.css'] }],
        'import/extensions': [0],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'never',
                allow: [],
                ignoreOnInitialization: false,
            },
        ],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['login', 'index'],
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 3,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
    // 别名设置
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['#', './types'],
                ],
                extensions: ['.ts', '.d.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
