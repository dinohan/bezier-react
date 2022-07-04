/* Internal dependencies */
import { styled } from 'Foundation'
import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

const PADDING = 3

const SWITCH_WIDTH: Record<SwitchSize, number> = {
  [SwitchSize.M]: 36,
  [SwitchSize.S]: 30,
}

const SWITCH_HEIGHT: Record<SwitchSize, number> = {
  [SwitchSize.M]: 24,
  [SwitchSize.S]: 20,
}

const SWITCH_HANDLE_WIDTH_HEIGHT: Record<SwitchSize, number> = {
  [SwitchSize.M]: 18,
  [SwitchSize.S]: 14,
}

interface WrapperProps extends Required<SwitchProps> {}

/* eslint-disable @typescript-eslint/indent */
export const Wrapper = styled.div<WrapperProps>`
  position: relative;

  width: ${({ size }) => SWITCH_WIDTH[size]}px;
  height: ${({ size }) => SWITCH_HEIGHT[size]}px;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  background-color: ${props => (
    props.checked
      ? props.foundation?.theme?.['bgtxt-green-normal']
      : props.foundation?.theme?.['bg-black-dark']
  )};

  ${({ foundation }) => foundation?.rounding?.round12}
  opacity: ${props => (props.disabled ? '.2' : 'initial')};

  &:hover {
    background-color: ${props => (
      props.checked
        ? props.foundation?.theme?.['bgtxt-green-dark']
        : props.foundation?.theme?.['bg-black-dark']
    )};
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'opacity'])};
`
/* eslint-enable @typescript-eslint/indent */

interface ContentProps extends SwitchProps {
  size: NonNullable<SwitchProps['size']>
  checked: NonNullable<SwitchProps['checked']>
}

export const Content = styled.div<ContentProps>`
  position: absolute;
  top: ${PADDING}px;
  left: ${PADDING}px;

  width: ${({ size }) => SWITCH_HANDLE_WIDTH_HEIGHT[size]}px;
  height: ${({ size }) => SWITCH_HANDLE_WIDTH_HEIGHT[size]}px;
  background-color: ${props => props.foundation?.theme?.['bgtxt-absolute-white-dark']};
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev2()};
  
  transform: ${props => (
    props.checked
      ? `translateX(${SWITCH_WIDTH[props.size] - SWITCH_HANDLE_WIDTH_HEIGHT[props.size] - (PADDING * 2)}px)`
      : 'initial'
  )};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['transform'])};
`
