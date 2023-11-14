import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Toast = styled('div', {
  position: 'absolute',
  left: '$2',
  bottom: '$2',
  padding: '20px 12px',

  border: '1px solid $gray600',
  borderRadius: 6,
  backgroundColor: '$gray800',

  display: 'flex',
  gap: 4,
  alignItems: 'baseline',

  div: {
    minWidth: '300px',
  },
  button: {
    all: 'unset',
    cursor: 'pointer',
  },
})

export type ToastProps = ComponentProps<typeof Toast>

Toast.displayName = 'Toast'
