// Look at the number of likes on line 25. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React, { useState } from 'react';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes } = props;
  const [ hasLiked, setHasLiked ] = useState(false); // tracks whether user has liked a post previously

  const handleLikes = () => {
    if (!hasLiked) {
      likePost();
      setHasLiked(true);
    } else {
      alert('Already liked this post!');
    }
  }

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper' onClick={handleLikes}>
          ❤️
        </div>
        <div className='like-section-wrapper'>
          💬
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
