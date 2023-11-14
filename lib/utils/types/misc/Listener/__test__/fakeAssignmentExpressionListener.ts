import { AssignmentExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeAssignmentExpressionListener = () =>
	jest.fn(fakeListenerFn<AssignmentExpression>);
