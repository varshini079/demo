import React from 'react';
import Post from '../homepage/card'; 
import postData from '../posts.json';

const FetchPosts = ({ startIndex, limit }) => {
  const limitedPosts = postData.slice(startIndex, startIndex + limit);

  const postContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '20px',
    marginLeft: '70px',
    maxWidth: '398px',
    marginTop: '20px',
  };

  const postCardStyle = {
    borderRadius: '10px',
    height: 'auto',
    width: '70%',
  };

  const mediaStyles = `
    @media (min-width: 960px) {
      .post-container {
        width: 50%;
        margin-top: -30px;
      }
      .post-card {
        width: 55%;
        margin-left: -40px;
        height: auto;
      }
    }
    @media (max-width: 600px) {
      .post-container {
        grid-template-columns: 1fr;
        margin-left: 700px;
        width: 10%;
        margin-top: 0px;
        justify-content: center;
        right: 0px;
      }
      .post-card {
        width: 50%;
        margin-left: 10px;
        height: auto;
        justify-content: center;
      }
    }
  `;

  return (
    <div>
      <style>{mediaStyles}</style>
      <div className="post-container" style={postContainerStyle}>
        {limitedPosts.map((post) => (
          <div key={post.id} className="post-card" style={postCardStyle}>
            <Post {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchPosts;
