import { Selectors } from '@/utils/types/listeners/Selectors';
import { Handlers } from '../Handlers';

export const fakeHandlers = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	ArrayExpression: jest.fn(() => () => {}),
	BinaryExpression: jest.fn(() => () => {}),
	...overrideProps,
}) as Handlers;

export const validKeys = ['ArrayExpression', 'BinaryExpression'] as Selectors;
export const invalidKeys = ['ArrayExpression'] as Selectors;
