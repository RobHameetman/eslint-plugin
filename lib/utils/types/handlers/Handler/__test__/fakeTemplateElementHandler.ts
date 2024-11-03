import { TemplateElement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeTemplateElementHandler = () =>
	jest.fn(fakeHandlerFn<TemplateElement>);
