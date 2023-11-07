import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { Check } from 'phosphor-react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      {/* asChild will provide to the father, the child's structure */}
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
