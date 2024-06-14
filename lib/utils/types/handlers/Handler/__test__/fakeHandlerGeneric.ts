import { Rule } from 'eslint';

export const fakeHandlerFn = <T>(_node: T & Rule.NodeParentExtension) => {};
