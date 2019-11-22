import React from 'react';

import Button from "react-bootstrap/Button";


export default class SearchButton extends React.Component {
  render() {
    return(
      <Button type="button" onClick={this.props.handleClick}>Search</Button>
    );
  }
}