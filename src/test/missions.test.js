import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import Missions from '../pages/Missions';

// Arangment
const missions = [
  {
    desc: 'The SpaceX Misions are best plan for system',
    key: 'cheers',
    id: 'csgo',
    type: 'hard',
    name: 'care',
    image: 'url',
    reservation: false,
  },
];

describe('Test render the Missions Component', () => {
  it('Missions section renders a hardcoded object, passed as a prop', () => {
    // Action
    const { container } = render(
      <Provider store={elementStore}>
        <Missions key={missions[0]} mission={missions[0]} />
      </Provider>,
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
