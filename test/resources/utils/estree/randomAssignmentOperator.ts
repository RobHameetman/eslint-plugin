import type { AssignmentOperator } from 'estree';
import { faker } from '@faker-js/faker';

export const randomAssignmentOperator = () =>
	faker.helpers.arrayElement([
		'=',
    '+=',
    '-=',
    '*=',
    '/=',
    '%=',
    '**=',
    '<<=',
    '>>=',
    '>>>=',
    '|=',
    '^=',
    '&=',
    '||=',
    '&&=',
    '??=',
	]) as AssignmentOperator;
