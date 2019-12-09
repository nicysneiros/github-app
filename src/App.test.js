import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';


const mockStore = configureStore([]);
const store =  mockStore({
  usersState: {
    isLoading: false,
    users: []
  }
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Provider store={store}><App /></Provider>, div);
  unmountComponentAtNode(div);
});
