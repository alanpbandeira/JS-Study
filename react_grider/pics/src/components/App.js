import React from 'react';
import axios from 'axios';
import SeachBar from './SearchBar';


class App extends React.Component {
  
  onSearchSubmit(term) {
    // console.log(term);
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID bf113a1fe6b76efd35d44845e805538e8b3ea6e6dc5b0e367781f0ec488d32c9'
      }
    });
  }
  
  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}> 
        <SeachBar onSubmit={this.onSearchSubmit} /> 
      </div>
    );
  }
}

export default App;