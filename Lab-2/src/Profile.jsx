import React from 'react';

const Profile = ({ name, role, avatarUrl }) => {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default Profile;