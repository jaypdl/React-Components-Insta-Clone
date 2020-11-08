/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  const [posts, setPosts] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [searchTerm, setSearchTerm] = useState('')

  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      ? Find the post! Loop through the posts to find the one with the matching ID. If it matches, add 1 to the like count.
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
      ? Pass this function (likePost) as a prop for children to use 
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
      ? Use the .map array function to return a new array with the altered like count
      ? Put all this in the setPosts invocation, so it changes the posts state. 
     */
    
    setPosts(posts.map(post => {
      if (post.id === postId){
        return { ...post, likes: post.likes + 1 };
      } else {
        return post;
      }
      /* Ternary for practice
      return post.id === postId
        ? { ...post, likes: post.likes +1 }
        : post; 
        */
    }))



  };

  return (
    <div className='App'>
    {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    <SearchBar />
    <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
