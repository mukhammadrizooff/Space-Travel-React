import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { removeDragonReservation } from '../../redux/dragons/dragons';

const ProfileDragons = (props) => {
  const dispatch = useDispatch();
  const { id, name } = props;

  const handleRemoveReservation = () => {
    dispatch(removeDragonReservation(id));
  };

  return (
    <tr>
      <th>{name}</th>
      <td><Button type="button" variant="danger" className="remove-reservation" onClick={handleRemoveReservation}>Cancel Reservation</Button></td>
    </tr>
  );
};

ProfileDragons.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProfileDragons;
