import React from 'react';

import { useSelector } from 'react-redux';

const Profile = () => {
  const dragonList = useSelector((state) => state.dragonsReducer);
  const dragonReservation = dragonList.filter((dragon) => dragon.reservation === true);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {
            dragonReservation.map((item) => <p key={item.id} className="font-1">{item.name}</p>)
          }
      </div>
    </div>
  );
};

export default Profile;
