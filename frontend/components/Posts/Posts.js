import React from 'react';
import Post from './Post';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log('Posts in Posts:', posts);
  console.log('Like in Posts:', likePost);

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map(post => {
        console.log('Post in Posts', post);
        <Post post={post} likePost={likePost} />
      })}
    </div>
  );
};

export default Posts;
