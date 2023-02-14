module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"react/react-in-jsx-scope": 0,
		"react/jsx-uses-react": 0,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		// "quotes": [
		// 	"error",
		// 	"double"
		// ],
		// "semi": [
		// 	"error",
		// 	"always"
		// ]
	}
};
