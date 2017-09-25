import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './common/navbar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
