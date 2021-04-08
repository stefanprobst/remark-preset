# Remark lint preset

This is a remark lint preset, which is compatible with `prettier`. Both linting
(`remark test.md`) and rewriting (`remark test.md -o`) should work.

- extends `preset-markdown-style-guide` and `preset-recommended`
- checks local links
- checks empty links
- enforces ## as first heading level

## Example

```json
// package.json
{
  "scripts": {
    "format": "prettier . --check --ignore-path .gitignore",
    "format:fix": "yarn format --write",
    "lint:md": "remark . --ignore-path .gitignore",
    "lint:md:fix": "yarn lint:md --output"
  },
  "lint-staged": {
    "*.md": ["prettier --write", "remark --output --frail"],
    "*.json": "prettier --write"
  },
  "prettier": "@stefanprobst/prettier-config",
  "remarkConfig": {
    "plugins": [
      "remark-frontmatter",
      "remark-gfm",
      "remark-footnotes",
      "@stefanprobst/remark-preset",
      "remark-lint-no-dead-urls"
    ]
  },
  "simple-git-hooks": {
    "pre-commit": "yarn lint-staged"
  }
}
```
