import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { searchUsers, searchUsersSuccess, searchUsersError } from '../../store/actions';


const GITHUB_API_TOKEN = `${process.env.REACT_APP_GITHUB_API_TOKEN}`;
const GITHUB_API_USER = `${process.env.REACT_APP_GITHUB_API_USER}`;


class SearchForm extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchClick = () => {
    this.props.searchUsers();

    const headers = new Headers({
      'Authorization': 'Basic ' + btoa(`${GITHUB_API_USER}:${GITHUB_API_TOKEN}`)
    });

    const url = 'https://api.github.com/search/users?q=' + this.state.searchTerm;

    fetch(url, {method: 'GET', headers: headers})
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

const mapStateToProps = store => ({
  isLoading: store.usersState.isLoading
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchUsers, searchUsersSuccess, searchUsersError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
