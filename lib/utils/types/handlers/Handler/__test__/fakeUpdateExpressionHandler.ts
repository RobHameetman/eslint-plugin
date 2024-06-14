import { UpdateExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeUpdateExpressionHandler = () =>
	jest.fn(fakeHandlerFn<UpdateExpression>);
