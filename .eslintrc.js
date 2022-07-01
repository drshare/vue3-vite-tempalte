module.exports = {
    root: true,
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
        semi: ['error', 'always'],
        'no-undef': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
        'no-console': process.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': ['error', { code: 120 }],
        'import/no-unresolved': [2, { ignore: ['virtual:generated-pages', 'virtual:windi.css'] }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['login', 'index', 'register'],
            },
        ],
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 3,
            },
            multiline: {
                max: 1,
            },
        }],
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
