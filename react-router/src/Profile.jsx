import React from 'react';

const data = {
  stef: {
    name: '유대상',
    description: '프론트엔드 개발자'
  },
  eden: {
    name: '강상우',
    description: '백엔드 개발자',
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if(!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;