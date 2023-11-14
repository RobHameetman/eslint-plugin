import { UpdateExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeUpdateExpressionListener = () =>
	jest.fn(fakeListenerFn<UpdateExpression>);
