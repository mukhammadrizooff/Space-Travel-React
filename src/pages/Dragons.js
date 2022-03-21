import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Dragon from '../components/Dragons/Dragon';

const Dragons = () => {
  const dragonList = useSelector((state) => state.dragons);
  return (
    <Container>
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
    </Container>
  );
};

export default Dragons;
