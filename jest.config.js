module.exports = {
    "snapshotResolver": "./config/snapshotResolver.js",
    "transform": {
        "^.+\\.jsx?$": "babel-jest",
        "\\.svg?": "svg-jest"
    },
    "moduleNameMapper": {
        "^@/components(.*)$": "<rootDir>/src/components$1",
        "^@/utils(.*)$": "<rootDir>/src/utils$1",
        "^@/assets/(.*svg|png|jpg)": "<rootDir>/src/assets/$1"
    } 
};