export const fetchUser = async userId => {
  try {
    const respoUser = await fetch(`https://api.github.com/users/${userId}`);
    if (!respoUser.ok) {
      return null;
    }
    const userData = await respoUser.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to load data');
  }
};

// fetchUser('github')
//   .then(userData => console.log(userData))
//   .catch(err => alert(err.message));
