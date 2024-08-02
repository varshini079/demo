import React from 'react';
import Post from './card';
import  postData from  '../posts.json';
// card component and its css is imported 
// FetchPosts component that maps over the postData of json file and passes the props to the Post component
// to view multiple user posts
const FetchPosts = () => (
  <div className="post-container">
    {postData.map(post => (
      <Post key={post.id} {...post} className="post-card" />
    ))}
  </div>
);


export default FetchPosts;
