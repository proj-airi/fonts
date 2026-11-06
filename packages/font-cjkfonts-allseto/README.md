# @proj-airi/font-cjkfonts-allseto

This package gives the CSS and the font file for cjkFonts AllSeto (cjkFonts 全瀨體).
cjkFonts AllSeto is a handwriting-style CJK font. It is based on SetoFont and covers Chinese, Japanese, Korean Hangul, and symbols.

The font file is `cjkFonts_allseto_v1.11.ttf` from [cjkFonts.io](https://cjkfonts.io/blog/cjkfonts_allseto).

## Usage

Install the package:

```sh
pnpm add @proj-airi/font-cjkfonts-allseto
```

Import the CSS one time, for example in `main.ts`:

```ts
import '@proj-airi/font-cjkfonts-allseto/index.css'
```

Then use the font family:

```css
font-family: 'cjkfonts AllSeto', sans-serif;
```

The font has one weight, 400.

## When to use

- Use it for handwriting-style text that mixes Chinese, Japanese, and Korean.

## When not to use

- Do not use it when you need bold text. The font has no bold weight, and the browser makes a synthetic bold.
- Do not import it into an app that does not use it. The file is about 30 MB.

## License

The font is under the [SIL Open Font License 1.1](./license.txt).
The Reserved Font Names are "cjkFonts 全瀨體" and "全瀨體". Do not modify the font file in this package.
