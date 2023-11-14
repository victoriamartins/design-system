import type { Meta, StoryObj } from '@storybook/react'
import { CustomTooltip, CustomTooltipProps, Text, Box } from '@cabbage-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: CustomTooltip,
  args: {
    title: 'Tooltip!',
    open: true,
  },
  decorators: [
    (Story) => {
      return <Box css={{ height: '50px', textAlign: 'center' }}>{Story()}</Box>
    },
  ],
} as Meta<CustomTooltipProps>

export const Primary: StoryObj<CustomTooltipProps> = (
  args: CustomTooltipProps,
) => (
  <CustomTooltip {...args}>
    <Text as="span">This is a component</Text>
  </CustomTooltip>
)
