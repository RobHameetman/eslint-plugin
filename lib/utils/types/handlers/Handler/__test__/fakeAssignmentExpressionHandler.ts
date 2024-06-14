import { AssignmentExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeAssignmentExpressionHandler = () =>
	jest.fn(fakeHandlerFn<AssignmentExpression>);
