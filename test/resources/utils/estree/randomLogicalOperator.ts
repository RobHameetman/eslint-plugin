import type { LogicalOperator } from 'estree';
import { faker } from '@faker-js/faker';

export const randomLogicalOperator = () =>
	faker.helpers.arrayElement([
		'||',
		'&&',
		'??',
	]) as LogicalOperator;
