import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Text } from '@cabbage-ui/react'
import { X } from 'phosphor-react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: (
      <>
        <div>
          <Text size="xl" as="strong">
            Feedback!
          </Text>
          <Text size="sm">This is the toast component.</Text>
        </div>
        <button>
          <X size={20} color="white" />
        </button>
      </>
    ),
  },
}
