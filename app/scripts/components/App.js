import React from 'react';

import Nav from './Nav';
import Header from './Header';

const App = React.createClass({
  render: function() {
    return (
      <main>
        <Nav/>
        <Header/>
      </main>
    );
  }
});

export default App;
