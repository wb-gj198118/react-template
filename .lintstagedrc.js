module.exports = {
    "src/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write --ignore-unknown"],
    "src/*.{css,less,scss}": ["stylelint", "prettier --write --ignore-unknown"],
    "src/*.{json,html}": ["prettier --write --ignore-unknown"]
}
