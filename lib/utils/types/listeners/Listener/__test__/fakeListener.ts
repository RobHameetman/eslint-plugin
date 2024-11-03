import { ArrayExpression, BinaryExpression } from 'estree';
import { fakeHandlerFn } from '@/utils/types/handlers/Handler/__test__/fakeHandlerGeneric';
import { Selectors } from '@/utils/types/listeners/Selectors';

export const fakeListener = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	ArrayExpression: jest.fn(fakeHandlerFn<ArrayExpression>),
	BinaryExpression: jest.fn(fakeHandlerFn<BinaryExpression>),
	...overrideProps,
});

export const validKeys = ['ArrayExpression', 'BinaryExpression'] as Selectors;
export const invalidKeys = ['ArrayExpression'] as Selectors;
