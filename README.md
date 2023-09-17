# placeholder-image-data-url-svg

A library for creating placeholder images as [Data URLs](https://developer.mozilla.org/en-US/docs/web/http/basics_of_http/data_urls). It provides a single function that takes some options about what the image should look like and returns the Data URL for use in HTML or CSS (via JavaScript).

## Installation

```bash
npm i placeholder-image
# or
yarn add placeholder-image
# or
pnpm add placeholder-image
# or
bun add placeholder-image
```

## Usage

The library can be used to generate Data URLs in JavaScript, meaning it will
need to be run in a JS framework that renders to HTML or a CSS-in-JS or JS CSS
preprocessor solution. For example, in React you would use it like this:

```jsx
import { placeholderImage } from 'placeholder-image-data-url-svg';

function Image(props) {
  return <img {...props} />;
}

function App() {
  return (
    <Image
      src={placeholderImage({ width: 400, height: 400 })}
      alt="Placeholder Image"
    />
  );
}
```

## Options

```typescript
interface PlaceholderImageOptions {
  /**
   * Width of the placeholder image.
   * @default 100
   */
  width?: number;
  /**
   * Height of the placeholder image.
   * @default 100
   */
  height?: number;
  /**
   * The background colour of the image.
   * @default #CCC
   */
  backgroundColour?: string;
  /**
   * The text colour of the image.
   */
  textColour?: string;
  /**
   * The text to use in the image.
   */
  text?: string;
}
```
