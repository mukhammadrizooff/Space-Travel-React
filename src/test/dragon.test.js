import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import Dragons from '../pages/Dragons';

// ARRANGE
const dragons = [
  {
    id: 'besto',
    name: 'frendo',
    type: 'capsule',
    description: 'The best capsule in the solar system',
    reservation: false,
  },
];

describe('Test render the Dragon Component', () => {
  it('Dragons section renders a hardcoded object, passed as a prop', () => {
    // ACT
    const { container } = render(
      <Provider store={elementStore}>
        <Dragons key={dragons[0].id} dragon={dragons[0]} />
      </Provider>,
    );

    // ASSERT
    expect(container).toMatchSnapshot();
  });
});
