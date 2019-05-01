import React from 'react';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';
import withAuenticate from './components/Authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuenticate(PostsPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="allPost">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
