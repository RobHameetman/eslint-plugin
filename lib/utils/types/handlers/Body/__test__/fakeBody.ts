import { faker } from '@faker-js/faker';
import { fakeBlockStatement } from '@@/fakes/estree/fakeBlockStatement';
import { fakeClassBody } from '@@/fakes/estree/fakeClassBody';
import { fakeDirective } from '@@/fakes/estree/fakeDirective';
import { fakeMethodDefinition } from '@@/fakes/estree/fakeMethodDefinition';
import { fakeModuleDeclaration } from '@@/fakes/estree/fakeModuleDeclaration';
import { fakePropertyDefinition } from '@@/fakes/estree/fakePropertyDefinition';
import { fakeStatement } from '@@/fakes/estree/fakeStatement';
import { fakeStaticBlock } from '@@/fakes/estree/fakeStaticBlock';

export const fakeBody = ({ ...overrideProps } = {}) => faker.helpers.arrayElement([
	faker.helpers.arrayElement([
		fakeStatement,
		fakeBlockStatement,
		fakeClassBody,
	])({ ...overrideProps }),
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => fakeStatement({ ...overrideProps }),
	),
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => faker.helpers.arrayElement([
			fakeMethodDefinition,
			fakePropertyDefinition,
			fakeStaticBlock,
		])({ ...overrideProps }),
	),
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => faker.helpers.arrayElement([
			fakeDirective,
			fakeStatement,
			fakeModuleDeclaration,
		])({ ...overrideProps }),
	),
]);
