module.exports = {
    extends: [
        'plugin:vue/vue3-essential',
        'prettier',
        "eslint:recommended",
    ],
    rules: {
        'vue/no-unused-vars': 'error',
        "vue/multi-word-component-names": "off",
    },
}