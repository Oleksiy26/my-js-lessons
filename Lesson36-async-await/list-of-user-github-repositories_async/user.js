const userAvatarElem = document.querySelector('.user__avatar');

const userNameElem = document.querySelector('.user__name');

const userLocationElem = document.querySelector('.user__location');

export const renderUserData = userData => {
  const { avatar_url: avatar, name, location } = userData;
  userAvatarElem.src = avatar;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
