# @proj-airi/font-xiaolai

This package gives the CSS and the font file for Xiaolai SC (小赖字体 SC).
Xiaolai is a Chinese handwriting font by LXGW. It is derived from SetoFont and adds the Simplified Chinese characters that SetoFont does not have.

The font file is `XiaolaiSC-Regular.ttf` from [lxgw/kose-font](https://github.com/lxgw/kose-font). It is the proportional version, not XiaolaiMono. The font version is 3.120.

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

The font has one weight, 400.

## When to use

- Use it for handwriting-style Simplified Chinese text.

## When not to use

- Do not use it when you need bold text. The font has no bold weight, and the browser makes a synthetic bold.
- Do not use it for code or numbers that must align. Use `@proj-airi/font-departure-mono`.
- Do not import it into an app that does not use it. The file is about 21 MB.

## License

The font is under the [SIL Open Font License 1.1](./LICENSE). Do not modify the font file in this package.
