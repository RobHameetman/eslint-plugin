import { AssignmentPattern } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeAssignmentPatternHandler = () =>
	jest.fn(fakeHandlerFn<AssignmentPattern>);
