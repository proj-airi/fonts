# Project AIRI Fonts

This repository has the font packages that [Project AIRI](https://github.com/moeru-ai/airi) uses.
Each package gives the CSS `@font-face` rules and the font files for one font.

## Packages

| Package | Font family | Weights | License | Source |
| --- | --- | --- | --- | --- |
| `@proj-airi/font-chillroundf` | `ChillRoundF` (寒蝉全圆体) | 400 | OFL 1.1 | [Warren2060/ChillRound](https://github.com/Warren2060/ChillRound) |
| `@proj-airi/font-chillroundm` | `ChillRoundM` (寒蝉半圆体) | 400 | OFL 1.1 | [Warren2060/ChillRound](https://github.com/Warren2060/ChillRound) |
| `@proj-airi/font-cjkfonts-allseto` | `cjkfonts AllSeto` (全瀨體) | 400 | OFL 1.1 | [cjkfonts.io](https://cjkfonts.io/blog/cjkfonts_allseto) |
| `@proj-airi/font-departure-mono` | `Departure Mono` | 400 | MIT | [rektdeckard/departure-mono](https://github.com/rektdeckard/departure-mono) |
| `@proj-airi/font-kirakara-maru` | `KirakaraMaru` (耀圆体) | 400, 700 | OFL 1.1 | [feiyangjun-1/KirakaraMaru](https://github.com/feiyangjun-1/KirakaraMaru) |
| `@proj-airi/font-lxgw-975yuan` | `LXGW 975 Yuan SC` (霞鹜975圆体SC) | 400, 500, 700 | OFL 1.1 | [lxgw/975Yuan](https://github.com/lxgw/975Yuan) |
| `@proj-airi/font-xiaolai` | `Xiaolai SC` (小赖字体) | 400 | OFL 1.1 | [lxgw/kose-font](https://github.com/lxgw/kose-font) |

Each package keeps the license of its font. The license is in the package folder or in the `license` field of its `package.json`.

## Usage

Install the package:

```sh
pnpm add @proj-airi/font-xiaolai
```

Import the CSS one time, for example in `main.ts`:

```ts
import '@proj-airi/font-xiaolai/index.css'
```

Then use the font family:

```css
font-family: 'Xiaolai SC', sans-serif;
```

The bundler copies the font files that the CSS refers to. The CJK font files are between 4 MB and 30 MB each. Import only the fonts that the app uses.

## Add a font

1. Copy a package folder, for example `packages/font-chillroundm`, to `packages/font-<name>`.
2. Put the font files in `src/files`. Do not modify the font data.
3. Write one `@font-face` rule for each weight in `src/index.css`.
4. Put the upstream license in `LICENSE`. Update `package.json`.
5. Add the package to the table in this README.

## Development

```sh
pnpm install
pnpm build
pnpm lint
```

## Release

All packages share one version.

1. On `main`, run `pnpm release`. bumpp sets the new version in all packages and makes the `release: vX.Y.Z` commit and tag.
2. Push the commit and the tag.
3. The `Release` workflow builds the packages and publishes them to npm with trusted publishing.
