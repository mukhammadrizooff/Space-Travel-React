import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import RocketItem from '../components/Rockets/elementRockets';
import styles from './Rockets.module.css';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  return (
    <Container>
      <ul className={styles.flex}>
        {rocketList.map((item) => (
          <RocketItem
            desc={item.desc}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.flickr_images}
            reserved={item.reservation}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Rockets;
