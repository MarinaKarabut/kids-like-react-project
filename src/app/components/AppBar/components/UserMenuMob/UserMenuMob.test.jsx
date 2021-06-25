import { render } from '@testing-library/react';
import React from 'react';
import UserMenuMob from './UserMenuMob';

describe('UserMenuMob', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<UserMenuMob {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UserMenuMob')).toBeTruthy();
    });
});
