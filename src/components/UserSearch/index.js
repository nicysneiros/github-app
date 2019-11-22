import React from 'react';

import Container from "react-bootstrap/Container";

import SearchForm from './searchForm';


export default class UserSearch extends React.Component {
  render() {
    return (
      <Container>
        <h1>User Search</h1>
        <SearchForm />
      </Container>
    );
  }
}
