import { render } from '@testing-library/react';
import { TestComponent } from './TestComponent';

describe('<TestComponent />', () => {
	it('should render', () => {
		expect(render(<TestComponent />)).toMatchSnapshot();
	});

	it('should render with props', () => {
		expect(render(<TestComponent text='Test!' />)).toMatchSnapshot();
	});
});
