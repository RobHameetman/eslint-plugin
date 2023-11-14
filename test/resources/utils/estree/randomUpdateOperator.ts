import type { UpdateOperator } from 'estree';
import { faker } from '@faker-js/faker';

export const randomUpdateOperator = () =>
	faker.helpers.arrayElement([
		'++',
		'--',
	]) as UpdateOperator;
