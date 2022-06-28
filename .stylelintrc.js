// https://stylelint.io/user-guide/rules/list/indentation/
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order', "stylelint-less"],
    customSyntax: 'postcss-less',
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': null,
        'color-no-invalid-hex': true,
        'less/color-no-invalid-hex': true
    },
    overrides: [
        {
            files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
            extends: ['stylelint-config-recommended',
                'stylelint-config-html/vue',
                'stylelint-config-recommended-vue',
            ],
            customSyntax: 'postcss-html',
            rules: {
                'keyframes-name-pattern': null,
                'selector-pseudo-class-no-unknown': [
                    true,
                    {
                        ignorePseudoClasses: ['deep', 'global'],
                    },
                ],
                'selector-pseudo-element-no-unknown': [
                    true,
                    {
                        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
                    },
                ],
            },
        },
        {
            files: ['*.less', '**/*.less'],
            customSyntax: 'postcss-less',
            extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
        },
    ],
};
