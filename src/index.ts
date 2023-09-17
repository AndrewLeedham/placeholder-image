import { readableColor, shade, tint } from 'polished';

export interface PlaceholderImageOptions {
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

/**
 * Generates a placholder image as an inline image data string.
 *
 * @param options - Options for customizing the placeholder image.
 * @returns Image data string.
 */
export function placeholderImage(
  options: PlaceholderImageOptions = {}
): string {
  const {
    width = 100,
    height = 100,
    backgroundColour = '#CCC',
    textColour = readableColor(
      backgroundColour,
      shade(0.2, backgroundColour),
      tint(0.2, backgroundColour),
      false
    ),
    text = `${width}x${height}`,
  } = options;
  const viewboxWidth = Math.min(100, (width / height) * 100);
  const viewboxHeight = Math.min(100, (height / width) * 100);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewboxWidth} ${viewboxHeight}" width="${width}" height="${height}"><style>*{font:400 16px sans-serif;}</style><rect width="100%" height="100%" fill="${backgroundColour}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  const base64 = btoa(svg);
  const utf8 = encodeURIComponent(svg);
  const unicode = !base64 || utf8.length < base64.length;
  return `data:image/svg+xml;${unicode ? 'utf8,' + utf8 : 'base64,' + base64}`;
}
