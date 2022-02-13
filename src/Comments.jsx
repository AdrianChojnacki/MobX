import React from 'react';

const Comments = () => {
  const handleClick = event => {
    const id = Number(event.target.dataset.id);

    removeComment(id);
  }

  const commentsElements = comments.map(comment => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <button
        data-id={comment.id}
        onClick={handleClick}
      >
        Usuń komentarz
      </button>
    </li>
  ));

  return (
    <ul>
      {commentsElements}
    </ul>
  )
}

export default Comments;
