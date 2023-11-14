import { ObjectPattern } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeObjectPatternListener = () =>
	jest.fn(fakeListenerFn<ObjectPattern>);
