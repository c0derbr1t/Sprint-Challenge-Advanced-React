import React from "react";
import { render } from '@testing-library/react';
import App from './App';

TextDecoderStream("App renders without crashing.", () => {
  const component = render(<App />);
});