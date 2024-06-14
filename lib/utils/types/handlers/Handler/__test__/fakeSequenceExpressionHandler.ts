import { SequenceExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeSequenceExpressionHandler = () =>
	jest.fn(fakeHandlerFn<SequenceExpression>);
