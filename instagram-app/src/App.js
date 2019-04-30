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
      commentText: '',
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      comments: [...dummyData.post.comments]
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.commentText !== prevState.commentText) {
  //     console.log("I Changed!")
  //   }
  // }

  handleChanges = e => {
    this.setState({
      commentText: e.target.value
    });
  }

  // addNewComment = (e) => {
  //   e.preventDefault();
  //   let newComment = { 
  //     username: "srsimps19", 
  //     commentText: this.state.comment
  //   }
  //   this.setState(prevState => {
  //     return {
  //         commentText: [...prevState.comments, newComment]
  //     }
  //   });
  // }

  addNewComment = (e) => {
    e.preventDefault();
    this.setState({
      comments: [...this.state.post.comments, 
        {
        commentText: this.state.commentText,
        username: "srsimps19"
        }
      ],
    commentText: ""
    });
  } 

  render() {
    return (
      <div className="allPost">
        <SearchBar />
        <PostContainer posts={this.state.posts} addNewComment={this.addNewComment} handleChanges={this.handleChanges} />
      </div>
    );
  }
}

export default App;
