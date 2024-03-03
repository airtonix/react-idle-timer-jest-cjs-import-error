module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    verbose: true,
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.json',
                diagnostics: { pretty: true },
                isolatedModules: false,
            }
        ],
    }
}