import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addDragonReservation, removeDragonReservation } from '../../redux/dragons/dragons';

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
        <img style={{ width: '100%', marginBottom: '50px' }} src={image} alt="Dragon" />
      </Col>
      <Col sm={8} lg={8}>
        <div style={{
          display: 'flex', gap: '6rem', marginBottom: '1.5rem', alignItems: 'center',
        }}
        >
          <h2>
            {name}
          </h2>
          <p style={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
            <h3>Type:</h3>
            <h3>{type}</h3>
          </p>

        </div>

        <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          {reservation && <Badge bg="warning" text="dark">Reserved</Badge>}
          {`${desc}`}
        </p>
        {reservation ? (
          <Button size="lg" variant="secondary" type="button" className="remove-reservation" onClick={handleRemoveReserveClick}>
            Cancel Reservation
          </Button>
        ) : (
          <Button size="lg" variant="primary" type="button" className="add-reservation" onClick={handleReserveClick}>
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
