import { Program } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeProgramHandler = () =>
	jest.fn(fakeHandlerFn<Program>);
