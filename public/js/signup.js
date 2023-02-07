const signupForm = document.getElementById('signup-form');

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  if (username.length <= 4 || email.length <= 4 || password.length <= 4) {
    alert("please fill all fields")

  } else {

    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.ok) {
      setTimeout(() => {
        document.location.replace('/dashboard');
      }, 1250);
    } else {

      alert(response.statusText);
    }
  }
}


signupForm.addEventListener('submit', signupFormHandler);
