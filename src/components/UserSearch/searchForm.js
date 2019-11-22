import React from 'react';

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchInput from './searchInput';
import SearchButton from './seachButton';


export default class SearchForm extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchClick = () => {
    // This function should dispatch search user action
    console.log("Search for: ", this.state.searchTerm);
  }

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <SearchInput
              email={this.state.searchTerm}
              handleChange={this.handleSearchInputChange}
            />
          </Col>
          <Col>
            <SearchButton
              handleClick={this.handleSearchClick}
            />
          </Col>
        </Row>
      </Form>
    )
  }
}