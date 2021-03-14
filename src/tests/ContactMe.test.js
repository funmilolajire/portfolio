import { ContactMe } from '../pages/ContactMe';
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

describe('ContactMe Page', () => {
    describe('make snapshot of ContactMe page', () => {
        test('matches the snapshot', () => {
            let tree = shallow(<ContactMe />)
            expect(tree).toMatchSnapshot();
        })
    })
})