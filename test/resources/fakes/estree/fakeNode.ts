import type { Node } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeAssignmentProperty } from './fakeAssignmentProperty';
import { fakeCatchClause } from './fakeCatchClause';
import { fakeClass } from './fakeClass';
import { fakeClassBody } from './fakeClassBody';
import { fakeExpression } from './fakeExpression';
import { fakeFunction } from './fakeFunction';
import { fakeIdentifier } from './fakeIdentifier';
import { fakeLiteral } from './fakeLiteral';
import { fakeMethodDefinition } from './fakeMethodDefinition';
import { fakeModuleDeclaration } from './fakeModuleDeclaration';
import { fakeModuleSpecifier } from './fakeModuleSpecifier';
import { fakePattern } from './fakePattern';
import { fakePrivateIdentifier } from './fakePrivateIdentifier';
import { fakeProgram } from './fakeProgram';
import { fakeProperty } from './fakeProperty';
import { fakePropertyDefinition } from './fakePropertyDefinition';
import { fakeSpreadElement } from './fakeSpreadElement';
import { fakeStatement } from './fakeStatement';
import { fakeSuper } from './fakeSuper';
import { fakeSwitchCase } from './fakeSwitchCase';
import { fakeTemplateElement } from './fakeTemplateElement';
import { fakeVariableDeclarator } from './fakeVariableDeclarator';

export const fakeNode = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const node = faker.helpers.arrayElement([
		fakeAssignmentProperty,
		fakeCatchClause,
		fakeClass,
		fakeClassBody,
		fakeExpression,
		fakeFunction,
		fakeIdentifier,
		fakeLiteral,
		fakeMethodDefinition,
		fakeModuleDeclaration,
		fakeModuleSpecifier,
		fakePattern,
		fakePrivateIdentifier,
		fakeProgram,
		fakeProperty,
		fakePropertyDefinition,
		fakeSpreadElement,
		fakeStatement,
		fakeSuper,
		fakeSwitchCase,
		fakeTemplateElement,
		fakeVariableDeclarator,
	])({ perf, ...overrideProps });

	return {
		...node,
		...overrideProps,
	} as Node;
};
