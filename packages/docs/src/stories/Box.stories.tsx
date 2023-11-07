import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@cabbage-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          reprehenderit voluptates sit inventore vel eos hic dignissimos ab.
          Error laborum sapiente neque quibusdam hic magnam a iure harum odio
          commodi?
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
