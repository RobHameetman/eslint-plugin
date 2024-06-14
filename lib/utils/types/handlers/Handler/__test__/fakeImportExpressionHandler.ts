import { ImportExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeImportExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ImportExpression>);
