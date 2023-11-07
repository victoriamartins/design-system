import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@cabbage-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'H2 Heading',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, a heading will always be an H2, but it is possible to change this with the __as__ property.',
      },
    },
  },
}
