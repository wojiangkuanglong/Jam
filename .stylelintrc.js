module.exports = {
  ignoreFiles: ['node_modules/**/*.scss', '**/*.md', '**/*.ts', '**/*.tsx', '**/*.js'],
  extends: ['stylelint-config-standard'],
  "syntax": "scss",
  "rules": {
    "block-no-empty": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "block-closing-brace-newline-before": null,
    "indentation": null,
    "property-no-unknown": [true, {
      "ignoreProperties": [
        "padding-vertical",
        "padding-horizontal",
        "shadow-color",
        "shadow-offset",
        "shadow-radius",
        "shadow-opacity"
      ]
    }
    ]
  }
}
