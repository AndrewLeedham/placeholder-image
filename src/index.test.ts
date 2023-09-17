import { expect, test } from 'bun:test';
import { placeholderImage } from '.';

const defaultDataUrl =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHN0eWxlPip7Zm9udDo0MDAgMTZweCBzYW5zLXNlcmlmO308L3N0eWxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNDQ0MiIC8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNhM2EzYTMiPjEwMHgxMDA8L3RleHQ+PC9zdmc+';

test('default output', () => {
  expect(placeholderImage()).toBe(defaultDataUrl);
});

test('options affect output', () => {
  expect(
    placeholderImage({
      width: 200,
      height: 800,
      backgroundColour: 'blue',
      textColour: 'red',
      text: 'test',
    })
  ).not.toBe(defaultDataUrl);
  expect(
    placeholderImage({
      width: 200,
      height: 800,
      backgroundColour: 'blue',
      textColour: 'red',
      text: 'test',
    })
  ).toBe(
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAxMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iODAwIj48c3R5bGU+Kntmb250OjQwMCAxNnB4IHNhbnMtc2VyaWY7fTwvc3R5bGU+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iYmx1ZSIgLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0icmVkIj50ZXN0PC90ZXh0Pjwvc3ZnPg=='
  );
});
