import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
// import AnimatedContainer from './AnimatedContainer';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

interface HeaderProps {
  children: string;
}

export default function Header({ children }: HeaderProps) {
  return (
    // <AnimatedContainer>
    <HeaderContainer>
      <Link to="/">
        <h1>{children}</h1>
      </Link>
      <Link to="/about">About</Link>
    </HeaderContainer>
    // </AnimatedContainer>
  );
}
