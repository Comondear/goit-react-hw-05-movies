import React from 'react';
// import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/goit-react-hw-05-movies/">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
