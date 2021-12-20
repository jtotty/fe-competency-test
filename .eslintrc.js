module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        allowForLoopAfterthoughts: 0,
        indent: ['error', 4],
        'global-require': false,
    },
};
