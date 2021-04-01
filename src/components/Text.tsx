import styled from 'styled-components';
import MEDIA from '../styles/Media';
import TextSize from '../types/CssTypes';

interface TextProps {
  size: TextSize;
}

const Text = styled.span<TextProps>`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.tablet`
      /* stylelint-disable value-keyword-case */
      font-size: ${({ size }: TextProps) => () => {
        switch (size) {
          case 'large':
            return '2.6rem';
          default:
            return '2rem';
        }
      }};
  `};
`;

export default Text;
