import { ArrayExpression, BinaryExpression } from 'estree';
import { fakeListenerFn } from '@type/misc/Listener/__test__/fakeListenerGeneric';
import { ListenerTypeList } from '@type/misc/ListenerTypeList';

export const fakeListenersFor = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	ArrayExpression: jest.fn(fakeListenerFn<ArrayExpression>),
	BinaryExpression: jest.fn(fakeListenerFn<BinaryExpression>),
	...overrideProps,
});

export const validKeys = ['ArrayExpression', 'BinaryExpression'] as ListenerTypeList;
export const invalidKeys = ['ArrayExpression'] as ListenerTypeList;
