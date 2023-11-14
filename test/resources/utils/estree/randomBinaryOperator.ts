import type { BinaryOperator } from 'estree';
import { faker } from '@faker-js/faker';

export const randomBinaryOperator = () =>
	faker.helpers.arrayElement([
		'==',
    '!=',
    '===',
    '!==',
    '<',
    '<=',
    '>',
    '>=',
    '<<',
    '>>',
    '>>>',
    '+',
    '-',
    '*',
    '/',
    '%',
    '**',
    '|',
    '^',
    '&',
    'in',
    'instanceof',
	]) as BinaryOperator;
