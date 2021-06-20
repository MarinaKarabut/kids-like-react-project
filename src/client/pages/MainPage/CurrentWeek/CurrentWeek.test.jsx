import { render } from '@testing-library/react';
import React from 'react';
import CurrentWeek from './CurrentWeek';

describe('CurrentWeek', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<CurrentWeek {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('CurrentWeek')).toBeTruthy();
    });
});
