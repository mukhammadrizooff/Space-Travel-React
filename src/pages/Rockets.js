import { useSelector } from 'react-redux';
import RocketItem from './elementRockets';
import styles from './Rockets.module.css';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rocketsReducer);
  return (
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
  );
};

export default Rockets;
