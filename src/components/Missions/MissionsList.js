import React from 'react'
import { useSelector } from 'react-redux'
import MissionsItem from './MissionsItem'

const MissionsList = () => {
    const missions = useSelector((state)=> state.missions);
    console.log(missions)
  return (
    <ul>
        
        {missions.map((mission)=> (
           <MissionsItem
           name={mission.mission_name}
           key={mission.mission_id}
           description={mission.mission_description}
           />

        ))}
        </ul>
  )
}

export default MissionsList
