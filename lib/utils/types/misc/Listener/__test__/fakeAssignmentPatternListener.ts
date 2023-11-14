import { AssignmentPattern } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeAssignmentPatternListener = () =>
	jest.fn(fakeListenerFn<AssignmentPattern>);
