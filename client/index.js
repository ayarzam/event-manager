import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store'
import '../public/style.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
    HELLO WORLD
    </div>
  </Provider>,
  document.getElementById('app')
)
