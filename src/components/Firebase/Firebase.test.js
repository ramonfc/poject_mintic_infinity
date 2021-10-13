import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from './Firebase';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Firebase />, div);
  ReactDOM.unmountComponentAtNode(div);
});