import { ProjectIndex } from '../pages/ProjectIndex';
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

describe('ProjectIndex Page', () => {
    describe('make snapshot of ProjectIndex page', () => {
        test('matches the snapshot', () => {
            let tree = shallow(<ProjectIndex />)
            expect(tree).toMatchSnapshot();
        })
    })
})