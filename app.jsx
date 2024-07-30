import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.body);
root.render(<App />);

export function App() {
  return (
    <>
      <h1>test me</h1>
      <marquee>nice</marquee>
    </>
  );
}