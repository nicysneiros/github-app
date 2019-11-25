import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { searchUsers, searchUsersSuccess, searchUsersError } from '../../store/actions';
import { GITHUB_DEFAULT_HEADER, GITHUB_BASE_URL } from '../../constants';


class SearchForm extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchClick = () => {
    this.props.searchUsers();

    const url = `${GITHUB_BASE_URL}search/users?q=${this.state.searchTerm}`;

    fetch(url, {method: 'GET', headers: GITHUB_DEFAULT_HEADER})
      .then(response => response.json())
      .then(response => {
        this.props.searchUsersSuccess(response);
      })
      .catch(error => {
        this.props.searchUsersError(error);
      });
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
          <Col xs="auto">
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

const mapStateToProps = store => ({
  isLoading: store.usersState.isLoading
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchUsers, searchUsersSuccess, searchUsersError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
