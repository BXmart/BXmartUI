import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../components';

const meta = {
  title: 'Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
  args: { as: 'h1', children: 'Title' },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    as: 'h1',
    children: 'Title',
  },
};

export const h2: Story = {
  args: {
    as: 'h2',
    children: 'Title',
  },
};
