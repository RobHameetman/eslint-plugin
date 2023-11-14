import { TemplateElement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeTemplateElementListener = () =>
	jest.fn(fakeListenerFn<TemplateElement>);
