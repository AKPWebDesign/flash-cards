import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Card from './card/Card';

const cards = [
  'flash',
  'cards',
  'are',
  'fun!',
];

const cards2 = [...Array(100).keys()];

ReactDOM.render(
  <div className="container">
    {cards.map(c => <Card name={c} key={c} />)}
    {cards2.map(c => <Card name={c} key={c} />)}
  </div>,
  document.getElementById('app'),
);

// allow hot module replacement, opposed to reloading the browser on every change.
module.hot.accept();
