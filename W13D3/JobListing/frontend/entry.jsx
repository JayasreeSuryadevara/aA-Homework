import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import configureStore from './store';

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});
