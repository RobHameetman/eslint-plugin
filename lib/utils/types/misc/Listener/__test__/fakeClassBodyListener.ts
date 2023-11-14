import { ClassBody } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeClassBodyListener = () =>
	jest.fn(fakeListenerFn<ClassBody>);
