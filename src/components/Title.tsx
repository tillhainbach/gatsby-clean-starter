import * as React from 'react';
import Text from './Text';
import TextSize from '../types/CssTypes';

type TitleProps = {
  children: React.ReactNode;
  as: keyof JSX.IntrinsicElements;
  size: TextSize;
};

function Title({ children, as = 'span', size }: TitleProps) {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  );
}

export default Title;
