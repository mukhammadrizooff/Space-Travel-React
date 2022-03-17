import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addDragonReservation, removeDragonReservation } from '../redux/dragons/dragons';

const Dragon = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, image, desc, reservation, type,
  } = props;
    // console.log(desc);
  const handleReserveClick = () => {
    dispatch(addDragonReservation(id));
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeDragonReservation(id));
  };

  return (
    <Row id={id}>
      <Col>
        <img src={image} alt="rocket" />
      </Col>
      <Col>
        <h2>{name}</h2>
        <p>
          type of dragon
          {type}
        </p>
        <p>
          {reservation && <span>Reserved</span>}
          {`${desc}`}
        </p>
        {reservation ? (
          <Button type="button" className="remove-reservation" onClick={handleRemoveReserveClick}>
            Cancel Reservation
          </Button>
        ) : (
          <Button type="button" className="add-reservation" onClick={handleReserveClick}>
            Reserve Rocket
          </Button>
        )}
      </Col>
    </Row>
  );
};

Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reservation: PropTypes.bool.isRequired,
};

export default Dragon;
