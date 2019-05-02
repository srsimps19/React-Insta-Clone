import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
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
            <>
                <SearchBar searchPosts={this.searchPostsHandler} />
                <PostContainer posts={this.state.filteredPost.length> 0 ? this.state.filteredPost : this.state.posts} />
            </>
       );
      }
}

export default PostsPage;