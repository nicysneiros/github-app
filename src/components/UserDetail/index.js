import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchUser, fetchUserSuccess, fetchUserError } from '../../store/actions';
import { GITHUB_DEFAULT_HEADER, GITHUB_BASE_URL } from '../../constants';


 class UserDetail extends React.Component {
  componentDidMount() {
    const url = `${GITHUB_BASE_URL}users/${this.props.match.params.username}`

    this.props.fetchUser();
    fetch(url, {method: 'GET', headers: GITHUB_DEFAULT_HEADER})
      .then(response => response.json())
      .then(response => {
        this.props.fetchUserSuccess(response);
      })
      .catch(error => {
        this.props.fetchUserError(error);
      });

  }

  renderUserInfo() {
    if(this.props.user) {
      return (
        <Container className="user-info">
          <Row>
            <Col xs="auto">
              <img className="user-avatar" src={this.props.user.avatar_url} width="128" height="128" alt={this.props.user.name}/>
            </Col>
            <Col>
              <h3>{this.props.user.name}</h3>
              <h4>{this.props.user.login}</h4>
              <p>{this.props.user.email}</p>
              <p>{this.props.user.location}</p>
            </Col>
          </Row>
          <Row className="user-stats">
            <Col>
              <h4>{this.props.user.followers}</h4>
              <p>Followers</p>
            </Col>
            <Col>
              <h4>{this.props.user.following}</h4>
              <p>Following</p>
            </Col>
            <Col>
              <h4>{this.props.user.public_repos}</h4>
              <p>Repos</p>
            </Col>
          </Row>
        </Container>
      );
    }
  }

  render() {
    return (
      <Container className="page-container">
        <h1 className="page-title">Github User Detail</h1>
        {this.renderUserInfo()}
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  isLoading: store.usersState.isLoading,
  user: store.usersState.user,
  error: store.usersState.error,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUser, fetchUserSuccess, fetchUserError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);