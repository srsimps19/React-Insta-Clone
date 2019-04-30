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
      commentText: ''
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  handleChanges = e => {
    this.setState({
      commentText: e.target.value
    });
  }

  addNewComment = (e) => {
    e.preventDefault();
    let newComment = { 
      username: "srsimps19", 
      commentText: this.state.comment
    }
    this.setState(prevState => {
      return {
          comments: [...prevState.comments, newComment]
      }
    });
  }

  render() {
    return (
      <div className="allPost">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
