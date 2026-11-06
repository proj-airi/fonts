# @proj-airi/font-chillroundm

This package gives the CSS and the font files for ChillRoundM (寒蝉半圆体).
ChillRoundM is a semi-rounded CJK font. It is based on Zen Maru Gothic and covers the GB2312 character set.

The font files come from [Warren2060/ChillRound](https://github.com/Warren2060/ChillRound). The font version is 1.805.

## Usage

Install the package:

```sh
pnpm add @proj-airi/font-chillroundm
```

Import the CSS one time, for example in `main.ts`:

```ts
import '@proj-airi/font-chillroundm/index.css'
```

Then use the font family:

```css
font-family: 'ChillRoundM', sans-serif;
```

The font has one weight, 400. The CSS declares the same font two times, one time as TTF and one time as OTF.

| File | Size |
| --- | --- |
| `ChillRoundM.ttf` | About 6 MB |
| `ChillRoundM.otf` | About 5 MB |

## When to use

- Use it for semi-rounded, friendly CJK text.

## When not to use

- Do not use it when you need bold text. The font has no bold weight, and the browser makes a synthetic bold.
- Do not use it when you need the fully rounded style. Use `@proj-airi/font-chillroundf`.

## License

The font is under the [SIL Open Font License 1.1](./LICENSE).
The Reserved Font Names are "ChillRoundF" and "ChillRoundM". Do not modify the font files in this package.
