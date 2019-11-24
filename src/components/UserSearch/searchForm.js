import React from 'react';

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



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
          <Form.Control
            name="search-input"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}/>
          </Col>
          <Col>
            <Button
              type="button"
              disabled={this.props.isLoading}
              onClick={!this.props.isLoading ? this.handleSearchClick : null}>
                {this.props.isLoading ? 'Loading...' : 'Search'}
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}