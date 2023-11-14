import { TemplateLiteral } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeTemplateLiteralListener = () =>
	jest.fn(fakeListenerFn<TemplateLiteral>);
