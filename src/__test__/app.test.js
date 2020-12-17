import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../app';

describe('<App>', () => {
  it('should match snapshot', async () => {
    const result = render(<App />);
    expect(result.container).toMatchSnapshot();
  });
});
