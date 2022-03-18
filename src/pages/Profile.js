import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRocket from './profileRockets';

const Profile = () => {
  const dragonList = useSelector((state) => state.dragonsReducer);
  const dragonReservation = dragonList.filter((dragon) => dragon.reservation === true);
  const rocketList = useSelector((state) => state.rocketsReducer);
  const profileRocket = rocketList.filter((rocket) => rocket.reserved === true);
  console.log(profileRocket);

  return (
    <>
      {profileRocket.length ? (
        <div className="reserved-rockets__section">
          <h2>My Rockets</h2>
          <ul>
            {profileRocket.map((item) => (
              <ProfileRocket
                key={item.id}
                id={item.id}
                name={item.name}
                wikipedia={item.wikipedia}
              />
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="empty">No Rockets have been reserved</h2>
      )}
      <div>
        <h1>Profile</h1>
        <div>
          {
              dragonReservation.map((item) => <p key={item.id} className="font-1">{item.name}</p>)
          }
        </div>
      </div>
    </>
  );
};

export default Profile;
