module.exports = {
	roots: [
		"<rootDir>/src"
	],
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	testRegex: '(/__tests__/.*|(\\.|/)(tests|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testEnvironment: 'node'
};
