# @proj-airi/font-departure-mono

This package gives the CSS and the font files for Departure Mono.
Departure Mono is a monospaced pixel font by Helena Zhang. It covers Latin, Cyrillic, basic Greek, and box-drawing characters.

The font files come from [departuremono.com](https://departuremono.com/). The font version is 1.500. The upstream notes are in [`src/README.md`](./src/README.md).

## Usage

Install the package:

```sh
pnpm add @proj-airi/font-departure-mono
```

Import the CSS one time, for example in `main.ts`:

```ts
import '@proj-airi/font-departure-mono/index.css'
```

Then use the font family:

```css
font-family: 'Departure Mono', monospace;
```

The font has one weight, 400. The CSS uses the OTF file. The package also has the WOFF and WOFF2 files at `@proj-airi/font-departure-mono/files/*`.

For sharp pixels, set the font size to a multiple of 11px.

## When to use

- Use it for code, numbers, and technical labels that must align.
- Use it for a pixel or retro style.

## When not to use

- Do not use it for CJK text. The font has no CJK characters.
- Do not use it for long body text.

## License

The font is under the [SIL Open Font License 1.1](./LICENSE).
