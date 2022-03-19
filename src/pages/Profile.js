import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ProfileRocket from '../components/Rockets/profileRockets';
import ProfileMissions from '../components/Missions/ProfileMissions';
import ProfileDragons from '../components/Dragons/ProfileDragons';
import style from './Profile.module.css';

const Profile = () => {
  const dragonList = useSelector((state) => state.dragons);
  const dragonReservation = dragonList.filter((dragon) => dragon.reservation === true);
  const rocketList = useSelector((state) => state.rockets);
  const profileRocket = rocketList.filter((rocket) => rocket.reservation === true);
  const missionList = useSelector((state) => state.missions);
  const profileMission = missionList.filter((mission) => mission.reserved === true);
  return (
    <div className={style.flex}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={3}>My Rocket Reservations</th>
          </tr>
        </thead>
        <tbody>
          {profileRocket.length ? (
            profileRocket.map((item) => (
              <ProfileRocket
                key={item.id}
                id={item.id}
                name={item.name}
                wikipedia={item.wikipedia}
              />
            ))
          ) : (
            <tr className="empty"><td>No Rockets have been reserved</td></tr>
          )}
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {profileMission.length ? (
            <>
              {profileMission.map((item) => (
                <ProfileMissions
                  key={item.mission_id}
                  id={item.mission_id}
                  name={item.mission_name}
                  description={item.mission_description}
                />
              ))}
            </>
          ) : (
            <tr className="empty"><td>You have not joined any missions</td></tr>
          )}
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>My Dragons</th>
          </tr>
        </thead>
        <tbody>
          {dragonReservation.length ? (
            dragonReservation.map((item) => (
              <ProfileDragons
                key={item.id}
                id={item.id}
                name={item.name}
              />
            ))
          ) : (<tr><td>No Rockets have been reserved</td></tr>)}
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
