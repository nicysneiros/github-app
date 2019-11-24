import React from 'react';

import Container from "react-bootstrap/Container";

import SearchForm from './searchForm';
import SearchResult from './searchResult';


export default class UserSearch extends React.Component {
  render() {
    return (
      <Container>
        <h1>Github User Search</h1>
        <SearchForm />
        <SearchResult />
      </Container>
    );
  }
}
