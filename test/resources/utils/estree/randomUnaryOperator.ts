import type { UnaryOperator } from 'estree';
import { faker } from '@faker-js/faker';

export const randomUnaryOperator = () =>
	faker.helpers.arrayElement([
		'-',
		'+',
		'!',
		'~',
		'typeof',
		'void',
		'delete',
	]) as UnaryOperator;
