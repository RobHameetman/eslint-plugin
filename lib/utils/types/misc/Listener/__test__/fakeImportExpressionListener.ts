import { ImportExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeImportExpressionListener = () =>
	jest.fn(fakeListenerFn<ImportExpression>);
