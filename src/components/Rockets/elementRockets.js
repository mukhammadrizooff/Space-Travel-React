import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
import { PropTypes } from 'prop-types';
import { addRocketReservation, removeRocketReservation } from '../../redux/rockets/rockets';

const elementRockets = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, image, desc, reserved,
  } = props;
  // console.log(desc);
  const handleReserveClick = () => {
    dispatch(addRocketReservation(id));
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <Row id={id}>
      <Col sm={4} lg={4}>
        <img style={{ width: '350px' }} src={image} alt="rocket" />
      </Col>
      <Col sm={8} lg={8}>
        <div style={{ display: 'flex', gap: '4.5rem' }}>
          <h2>{name}</h2>
          <p>
            {reserved && <span>Reserved</span>}
            { `${desc}` }
          </p>
          {reserved ? (
            <Button type="button" className="remove-reservation" onClick={handleRemoveReserveClick}>
              Cancel Reservation
            </Button>
          ) : (
            <Button type="button" variant="danger" className="add-reservation" onClick={handleReserveClick}>
              Reserve Rocket
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

elementRockets.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default elementRockets;
