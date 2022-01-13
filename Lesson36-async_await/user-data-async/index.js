const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    return response.json();
  } catch (err) {
    throw new Error('Failed to load data');
  }
};

export const getUsersBlogs = allUsers =>
  Promise.all(allUsers.map(el => fetchUser(el).then(res => res.blog)));

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList));
