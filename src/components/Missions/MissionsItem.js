import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const MissionsItem = ({ name, description }) => (
  <tr>
    <th>{name}</th>
    <td>{description}</td>
    <td><Badge bg="secondary">Not A Member</Badge></td>
    <td colSpan={2}><Button variant="secondary">Join Mission</Button></td>
  </tr>
);

export default MissionsItem;

MissionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
