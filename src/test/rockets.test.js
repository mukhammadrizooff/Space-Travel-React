import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import Rockets from '../pages/Rockets';

// Arangment
const rockets = [
  {
    desc: 'The SpaceX Rockets are best module for render',
    key: 'frame',
    id: 'rocky',
    type: 'module',
    name: 'rocky',
    image: 'url',
    reservation: false,
  },
];

describe('Test render the Dragon Component', () => {
  it('Dragons section renders a hardcoded object, passed as a prop', () => {
    // Action
    const { container } = render(
      <Provider store={elementStore}>
        <Rockets key={rockets[0].id} dragon={rockets[0]} />
      </Provider>,
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});