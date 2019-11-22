import React from 'react';

import FormControl from 'react-bootstrap/FormControl';


export default class SearchInput extends React.Component {
  render() {
    return(
      <FormControl name="search-input" className="search-input" type="text" value={this.props.searchTerm} onChange={this.props.handleChange}/>
    );
  }
}