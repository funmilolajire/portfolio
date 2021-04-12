import { Home } from '../pages/Home';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
// import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
    __esModule: true,
    useLocation: jest.fn().mockReturnValue({
        pathname: '/another-route',
        search: '',
        hash: '',
    }),
}));

describe('Home Page', () => {
    describe('make snapshot of Home page', () => {
        test('matches the snapshot', () => {
            let tree = shallow(<Home />)
            expect(tree).toMatchSnapshot();
        })
    })
})