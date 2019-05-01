import React from 'react';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';



class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="allPost">
        <PostsPage />
      </div>
    );
  }
}

export default App;
