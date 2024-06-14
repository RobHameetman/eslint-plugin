import { MemberExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeMemberExpressionHandler = () =>
	jest.fn(fakeHandlerFn<MemberExpression>);
