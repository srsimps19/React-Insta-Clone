import React from 'react';
import './App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPost: []
    };
  }

  componentDidMount() {
    this.setState({
     posts: dummyData
    });
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    })
    this.setState({ filteredPost: posts});
  }

  render() {
    return (
      <div className="allPost">
        <SearchBar searhTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} />
        <PostContainer posts={this.state.filteredPost.length > 0 ? this.state.filterPost : this.state.posts} />
      </div>
    );
  }
}

export default App;
