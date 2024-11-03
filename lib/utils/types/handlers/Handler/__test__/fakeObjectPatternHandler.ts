import { ObjectPattern } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeObjectPatternHandler = () =>
	jest.fn(fakeHandlerFn<ObjectPattern>);
