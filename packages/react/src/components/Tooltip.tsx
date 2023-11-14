import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { ComponentProps } from 'react'

export type CustomTooltipProps = ComponentProps<typeof Tooltip>

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#121214',
    width: 16,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#121214',
    padding: '16px 14px',
    color: 'E1E1E6',
    fontSize: '14px',
    fontWeight: '400',
  },
}))
