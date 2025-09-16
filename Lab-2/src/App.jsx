import React from 'react';
import Profile from './Profile';
import './App.css';

const App = () => {
  const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "role": "Developer",
      "avatarUrl": "https://www.svgrepo.com/download/1645/woman.svg"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "role": "Designer",
      "avatarUrl": "https://www.svgrepo.com/download/4559/man.svg"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "role": "Manager",
      "avatarUrl": "https://www.svgrepo.com/download/18047/girl.svg"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "role": "Engineer",
      "avatarUrl": "https://www.svgrepo.com/download/26728/woman.svg"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "role": "Analyst",
      "avatarUrl": "https://www.svgrepo.com/download/40589/girl.svg"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "role": "Coordinator",
      "avatarUrl": "https://www.svgrepo.com/download/1645/woman.svg"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "role": "Developer",
      "avatarUrl": "https://www.svgrepo.com/download/9283/man.svg"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "role": "Designer",
      "avatarUrl": "https://www.svgrepo.com/download/27132/man.svg"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "role": "Manager",
      "avatarUrl": "https://www.svgrepo.com/download/18047/girl.svg"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "role": "Engineer",
      "avatarUrl": "https://www.svgrepo.com/download/26728/woman.svg"
    }
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles-list">
        {users.map(user => (
          <Profile
            key={user.id}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;