import React from 'react';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';



class App extends React.Component {
  render() {
    return (
      <div className="allPost">
        <PostsPage />
      </div>
    );
  }
}

export default App;
