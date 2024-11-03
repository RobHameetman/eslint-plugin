import { Super } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeSuperHandler = () =>
	jest.fn(fakeHandlerFn<Super>);
