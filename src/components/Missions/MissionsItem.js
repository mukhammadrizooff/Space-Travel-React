import React from 'react'

const MissionsItem = ({key,name,description}) => {
  return (
    <li>
        <h3>{name}</h3>
        <p>{description}</p>
    </li>
  )
}

export default MissionsItem
