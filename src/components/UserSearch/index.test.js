import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import UserSearch from './index';


// Search Form Mock
jest.mock('./searchForm', () => {
  return function MockSearchForm() {
    return <div data-testid="search-form"/>
  }
});

// Search Result Mock
jest.mock('./searchResult', () => {
  return function MockSearchResult() {
    return <div data-testid="search-result" />
  }
});

describe('User Search Component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<UserSearch />, container);
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders user search page with title, search form and search result components", () => {
    expect(container.querySelector('.page-title').textContent).toBe("Github User Search");
    expect(container.querySelector('[data-testid="search-form"]')).toBeDefined();
    expect(container.querySelector('[data-testid="search-result"]')).toBeDefined();
  });
})
