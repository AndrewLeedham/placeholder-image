import { Meta, StoryObj } from '@storybook/react';
import { PlaceholderImageOptions, placeholderImage } from '../src';

function render(options: PlaceholderImageOptions) {
  return <img src={placeholderImage(options)} alt="Placeholder image" />;
}

export default {
  title: 'Placeholder Image',
  render,
  argTypes: {
    width: {
      type: 'number',
      control: {
        type: 'range',
        min: 20,
        max: 2000,
        step: 10,
      },
      description: 'Width of the placeholder image.',
      defaultValue: { summary: 100 },
    },
    height: {
      type: 'number',
      control: {
        type: 'range',
        min: 20,
        max: 2000,
        step: 10,
      },
      description: 'Height of the placeholder image.',
      defaultValue: { summary: 100 },
    },
    backgroundColour: {
      type: 'string',
      control: {
        type: 'color',
      },
      description: 'The background colour of the image.',
      defaultValue: { summary: '#CCC' },
    },
    textColour: {
      type: 'string',
      control: {
        type: 'color',
      },
      description: 'The text colour of the image.',
      defaultValue: {
        detail: 'Calculated from the backgroundColour.',
        summary: '#A3A3A3',
      },
    },
    text: {
      type: 'string',
      description: 'The text to use in the image.',
      defaultValue: {
        summary: '100x100',
        detail: 'Calculated from the width and height.',
      },
    },
  },
} satisfies Meta<PlaceholderImageOptions>;

type Story = StoryObj<PlaceholderImageOptions>;

export const Default: Story = {};

export const CustomColour: Story = {
  args: {
    backgroundColour: '#000000',
    textColour: '#ffffff',
  },
};

export const WidthLarger: Story = {
  args: {
    width: 400,
    height: 150,
  },
};

export const HeightLarger: Story = {
  args: {
    width: 300,
    height: 400,
  },
};

export const KnownIssue: Story = {
  args: {
    width: 150,
    height: 400,
  },
};
