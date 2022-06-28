// https://stylelint.io/user-guide/rules/list/indentation/
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
        'stylelint-config-html/vue',
        'stylelint-config-recommended-vue'
    ],
    plugins: ['stylelint-order', "stylelint-less"],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': null,
        'color-no-invalid-hex': true,
        'less/color-no-invalid-hex': true
    }
};
