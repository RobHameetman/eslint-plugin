import { MemberExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeMemberExpressionListener = () =>
	jest.fn(fakeListenerFn<MemberExpression>);
