/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
    transformIgnorePatterns: [
        "node_modules/(?!(@cloudinary/url-gen)/)"
    ],
    globals: {
        "ts-jest": {
            useESM: true,
            compiler: "typescript",
        },
    },
};
