import { Program } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeProgramListener = () =>
	jest.fn(fakeListenerFn<Program>);
