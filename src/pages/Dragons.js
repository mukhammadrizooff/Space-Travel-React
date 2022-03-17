import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Rockets = () => {
  const dragonList = useSelector((state) => state.dragonsReducer);
  return (
    <ul>
      {dragonList.map((item) => (
        <Dragon
          desc={item.desc}
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
          image={item.flickr_images}
          reservation={item.reservation}
        />
      ))}
    </ul>
  );
};

export default Rockets;
