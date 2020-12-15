import React from 'react';
import { Wrapper } from '../../ui/wrapper';

export const PageTitle = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <Wrapper>
      <h1>{children}</h1>
    </Wrapper>
  );
};
