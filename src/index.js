import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Card from './card/Card';

ReactDOM.render(
  <div className="container">
    <Card name="front" />
  </div>,
  document.getElementById('app'),
);

// allow hot module replacement, opposed to reloading the browser on every change.
module.hot.accept();
