/* Internal dependencies */
import { ContentComponentProps, BezierComponentProps } from '../../types/ComponentProps'

export default interface ListMenuTitleProps extends ContentComponentProps {
  rightAction?: React.ReactNode
  hide?: boolean
  onClick?: () => void
  onClickAction?: () => void
}

export interface StyledWrapperProps extends BezierComponentProps {}

export interface StyledTitleWrapperProps extends BezierComponentProps {}
