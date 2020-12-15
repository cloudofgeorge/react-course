import { useState } from 'react';

export const useInput = initialValue => {
  const [state, setState] = useState(initialValue);

  const onChange = event => {
    setState(event.target.value);
  };

  return [state, onChange];
};
