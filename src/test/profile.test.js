import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import ProfileRocket from '../components/Rockets/profileRockets';
import ProfileMissions from '../components/Missions/ProfileMissions';
import ProfileDragons from '../components/Dragons/ProfileDragons';
import Profile from '../pages/Profile'

const rocket = [{
    key: 'rocket',
    id: 'rocket',
    name: 'rocket 1',
    wikipedia: 'http://en.wikipedia.org/'
}];

const mission = [{
    key: 'mission',
    id: 'mission',
    name: 'mission 1',
    description: 'mission alpha'
}];

const dragon = [{
    key: 'dragon',
    id: 'dragon',
    name: 'dragon beta',
}]


describe('Test render the Profile Component', () => {
    it('Profile section renders a hardcoded objects, passed as a prop', () => {
        // ACT
        const { container } = render(
            <Provider store={elementStore}>
                <Profile>
                    <ProfileRocket key={rocket[0].id} rocket={rocket[0]} />
                    <ProfileMissions key={mission[0].id} mission={mission[0]} />
                    <ProfileDragons key={dragon[0].id} dragon={dragon[0]} />

                </Profile>
            </Provider>,
        );
        // ASSERT
        expect(container).toMatchSnapshot();
    });
});
