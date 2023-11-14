import { faker } from '@faker-js/faker';
import { RuleListeners } from '../RuleListeners';

export const fakeRuleListeners = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	ArrayExpression: jest.fn(() => () => {}),
	BinaryExpression: jest.fn(() => () => {}),
	...overrideProps,
}) as RuleListeners;

export const validKeys = ['ArrayExpression', 'BinaryExpression'] as Array<keyof RuleListeners>;
export const invalidKeys = ['ArrayExpression'] as Array<keyof RuleListeners>;
