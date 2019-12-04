import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
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
        {this.props.error ? <Alert variant='danger'>{this.props.error}</Alert> : null}
        {this.props.users.length ?
          <Container className="inner-page-container search-result">
            <ListGroup>{this.renderUsers()}</ListGroup>
          </Container>
          : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  users: store.usersState.users,
  error: store.usersState.error
});

export default connect(mapStateToProps)(SearchResult);
