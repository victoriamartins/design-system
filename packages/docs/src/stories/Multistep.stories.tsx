import type { Meta, StoryObj } from '@storybook/react'
import { Box, Multistep, MultistepProps } from '@cabbage-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    currentStep: 2,
    size: 5,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}

export const Full: StoryObj<MultistepProps> = {
  args: {
    currentStep: 5,
  },
}
