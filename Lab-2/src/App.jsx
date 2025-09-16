import React from 'react';
import Profile from './Profile';
import './App.css';

const App = () => {
  const users = [
    {
      "id": 1,
      "name": "Mark Zuckerberg",
      "role": "Developer",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Zuckerberg-Jourov%C3%A1_meeting_%282020%29%28cropped_4%29.jpg/500px-Zuckerberg-Jourov%C3%A1_meeting_%282020%29%28cropped_4%29.jpg"
    },
    {
      "id": 2,
      "name": "Jessica Walsh",
      "role": "Designer",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jessica_Walsh_2013.jpg/500px-Jessica_Walsh_2013.jpg"
    },
    {
      "id": 3,
      "name": "Evan Spiegel",
      "role": "Manager",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Evan_Spiegel%2C_founder_of_Snapchat.jpg/500px-Evan_Spiegel%2C_founder_of_Snapchat.jpg"
    },
    {
      "id": 4,
      "name": "Daniel Gross",
      "role": "Engineer",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/TechCrunch_Disrupt_San_Francisco_2018_-_day_2_%2843613758885%29.jpg/500px-TechCrunch_Disrupt_San_Francisco_2018_-_day_2_%2843613758885%29.jpg"
    },
    {
      "id": 5,
      "name": "Cathy O'Neil",
      "role": "Analyst",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cathy_O%27Neil_at_Google_Cambridge.jpg/500px-Cathy_O%27Neil_at_Google_Cambridge.jpg"
    },
    {
      "id": 6,
      "name": "Ernestine Fu",
      "role": "Coordinator",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ernestine_Fu_%2820240513%29.jpg/500px-Ernestine_Fu_%2820240513%29.jpg"
    },
    {
      "id": 7,
      "name": "Aaron Swartz",
      "role": "Developer",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Aaron_Swartz_in_2011.jpg/500px-Aaron_Swartz_in_2011.jpg"
    },
    {
      "id": 8,
      "name": "Julie Zhuo",
      "role": "Designer",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Julie_Zhuo.jpg/500px-Julie_Zhuo.jpg"
    },
    {
      "id": 9,
      "name": "Ruben Amorim",
      "role": "Manager",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/RubenAmorim4.png/375px-RubenAmorim4.png"
    },
    {
      "id": 10,
      "name": "Drew Houston",
      "role": "Engineer",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Drew_Houston_at_Web_Summit_%28cropped%29.jpg/500px-Drew_Houston_at_Web_Summit_%28cropped%29.jpg"
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