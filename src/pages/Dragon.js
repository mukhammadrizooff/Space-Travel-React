import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
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
      <Col sm={4} lg={4}>
        <img style={{ width: '100%', marginBottom: '50px' }} src={image} alt="rocket" />
      </Col>
      <Col sm={8} lg={8}>
        <h2 style={{ display: 'flex', gap: '6rem' }}>
          <span>
            {name}
          </span>
          <span>
            Type:
            {type}
          </span>

        </h2>

        <p>
          {reservation && <Badge bg="warning" text="dark">Reserved</Badge>}
          {`${desc}`}
        </p>
        {reservation ? (
          <Button variant="secondary" type="button" className="remove-reservation" onClick={handleRemoveReserveClick}>
            Cancel Reservation
          </Button>
        ) : (
          <Button variant="primary" type="button" className="add-reservation" onClick={handleReserveClick}>
            Reserve Dragon
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
