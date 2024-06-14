import { ArrayPattern } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeArrayPatternHandler = () =>
	jest.fn(fakeHandlerFn<ArrayPattern>);
