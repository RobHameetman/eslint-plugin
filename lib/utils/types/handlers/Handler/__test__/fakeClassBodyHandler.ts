import { ClassBody } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeClassBodyHandler = () =>
	jest.fn(fakeHandlerFn<ClassBody>);
