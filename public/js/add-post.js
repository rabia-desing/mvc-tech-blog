const addPost = document.getElementById('addPost-form');

async function newPostHandler(event) {
  event.preventDefault();


  const post_title = document.getElementById('add-post-title').value;
  const post_desc = document.getElementById('add-post-desc').value;
  const addPostStatusEl = document.getElementById('addpost-status');
  if (post_title.length <= 4 || post_desc.length <= 4) {

    addPostStatusEl.textContent =
      'Please make all inputs are filled with character count above 4';
    addPostStatusEl.style.color = 'red';
    setTimeout(() => {
      addPostStatusEl.textContent =
        'Fill in all required inputs with character count above 4';
      addPostStatusEl.style.color = 'black';
    }, 4000);
  } else {

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post_title,
        post_desc,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.ok) {
      addPostStatusEl.textContent = 'Successfully posted, refreshing...';
      addPostStatusEl.style.color = 'Green';
      setTimeout(() => {
        document.location.replace('/dashboard');
      }, 750);
    } else {

      alert(response.statusText);
    }
  }
}


addPost.addEventListener('submit', newPostHandler);
