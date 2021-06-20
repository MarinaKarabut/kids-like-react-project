import { render } from '@testing-library/react';
import React from 'react';
import Balance from './Balance';

describe('Balance', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Balance {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Balance')).toBeTruthy();
    });
});
