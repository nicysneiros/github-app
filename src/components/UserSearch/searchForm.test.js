import React from "react";
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'react-redux-api-tools';

import SearchForm from './searchForm';
import * as searchUsers from '../../store/actions';


const mockStore = configureStore([thunk, apiMiddleware]);

describe('Search Form Component', () => {
  let store;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders search form with loading false', () => {
    store =  mockStore({
      usersState: {
        isLoading: false,
        users: []
      }
    });

    act(() => {
      render(<Provider store={store}><SearchForm /></Provider>, container);
    });

    expect(container.querySelector('.search-btn').textContent).toBe("Search");
    expect(container.querySelector('[name="search-input"]')).toBeDefined();
  });

  it('renders search form with loading true', () => {
    store =  mockStore({
      usersState: {
        isLoading: true,
        users: []
      }
    });

    act(() => {
      render(<Provider store={store}><SearchForm /></Provider>, container);
    });

    expect(container.querySelector('.search-btn').textContent).toBe("Loading...");
    expect(container.querySelector('[name="search-input"]')).toBeDefined();
  });

  it('dispatches action on search button click', () => {
    store = mockStore({
      usersState: {
        isLoading: false,
        users: []
      }
    });

    act(() => {
      render(<Provider store={store}><SearchForm /></Provider>, container);
      Simulate.change(container.querySelector('[name="search-input"]'), { target: { value: 'mary' }});
      Simulate.click(container.querySelector('.search-btn'));
    });

    const actions = store.getActions();
    expect(actions[0].type).toBe('SEARCH_USERS');
  });
});