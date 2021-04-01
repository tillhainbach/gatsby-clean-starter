import * as React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header> My Gatsby Site </Header>
      {children}
    </div>
  );
}
