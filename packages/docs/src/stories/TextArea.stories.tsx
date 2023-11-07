import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '@cabbage-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your message',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
