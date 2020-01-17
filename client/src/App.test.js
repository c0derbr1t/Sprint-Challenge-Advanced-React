import React from "react";
import { render } from '@testing-library/react';
import App from './App';

test("App renders without crashing.", () => {
  render(<App />);
});

// test("Contains the phrase 'Google Trends'.", () => {
//   const wrap = render(<App />);
//   const hasText = wrap.queryByText(/google trends/i);
//   expect(hasText).toBeInTheDocument();
// })

// test("Contains a mode button", () => {
//   const { getByTestId } = render(<App />);

//   getByTestId(/mode-btn/i);
// })

// test("Title is NaN", () => {
//   const { getByTestID } = render(<App />);

//   expect(getByTestID("title")).not.toBeNaN();
// })

test("App includes the words 'Google Trends'.", () => {
  const wrap = render(<App />);
  expect(wrap.getAllByAltText(/google trends/i));
})