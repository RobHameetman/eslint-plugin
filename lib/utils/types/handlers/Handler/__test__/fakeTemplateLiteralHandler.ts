import { TemplateLiteral } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeTemplateLiteralHandler = () =>
	jest.fn(fakeHandlerFn<TemplateLiteral>);
