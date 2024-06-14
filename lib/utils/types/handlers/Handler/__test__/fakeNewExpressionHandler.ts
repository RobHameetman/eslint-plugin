import { NewExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeNewExpressionHandler = () =>
	jest.fn(fakeHandlerFn<NewExpression>);
