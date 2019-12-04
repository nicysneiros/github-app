import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { searchUsers } from '../../store/actions';


class SearchForm extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchClick = () => {
    this.props.searchUsers(this.state.searchTerm);
  }

  render() {
    return (
      <Form className="search-form">
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
              className="search-btn"
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
  return bindActionCreators({ searchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
