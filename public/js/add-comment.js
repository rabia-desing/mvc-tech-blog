const addCommentForm = document.getElementById('comment-form');

async function addComment(newComment, postId) {
  const response = await fetch(`/api/comments/${postId}`, {
    method: 'POST',
    body: JSON.stringify({
      comment_text: newComment,
      post_id: postId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace(`/post/${postId}`);
  } else {
    alert(response.statusText);
  }
}

const newCommentHandler = (event) => {
  event.preventDefault();

  const comment_text = document.getElementById('comment-field').value;
  const postId = window.location.pathname.split('/')[2];
  setTimeout(() => {
    addComment(comment_text, postId);
  }, 750);

};

addCommentForm.addEventListener('submit', newCommentHandler);
