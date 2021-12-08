/* Internal dependencies */
import { styled, css, SemanticNames } from 'Foundation'
import type { InterpolationProps, FoundationProps } from 'Types/Foundation'
import { TAGBADGE_VERTICAL_PADDING } from './constants/TagBadgeStyle'

interface CommonTagBadgeStyleProps extends InterpolationProps {
  rounding: ReturnType<typeof css>
  horizontalPadding: number
  color?: SemanticNames
  bgColor: SemanticNames
}

const Wrapper = styled.div.attrs(({
  foundation,
  bgColor,
  color = 'txt-black-darkest',
  horizontalPadding,
}: CommonTagBadgeStyleProps & FoundationProps) => ({
  style: {
    padding: `${TAGBADGE_VERTICAL_PADDING}px ${horizontalPadding}px`,
    color: foundation?.theme?.[color],
    backgroundColor: foundation?.theme?.[bgColor],
  },
}))<CommonTagBadgeStyleProps>`
  display: flex;
  align-items: center;

  ${({ rounding }) => rounding};

  ${({ interpolation }) => interpolation};
`

export default {
  Wrapper,
}
