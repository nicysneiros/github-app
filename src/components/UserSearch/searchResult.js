import React from 'react';
import { connect } from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SearchResult extends React.Component {

  renderUsers() {
    if(this.props.users) {
      return this.props.users.map(user => {
        return (
          <ListGroup.Item action key={user.id} href={`/users/${user.login}`}>
            <Row>
              <Col xs="auto"><img className="user-avatar" src={user.avatar_url} height="48" alt=""/></Col>
              <Col className="user-login">{user.login}</Col>
            </Row>
          </ListGroup.Item>
        );
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Alert variante='danger'>{this.props.error}</Alert>
        <ListGroup>{this.renderUsers()}</ListGroup>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  users: store.usersState.users,
  error: store.usersState.error
});

export default connect(mapStateToProps)(SearchResult);
