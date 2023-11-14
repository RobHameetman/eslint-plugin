import { faker } from '@faker-js/faker';
import { fakeBlockStatement } from '@test/fakes/estree/fakeBlockStatement';
import { fakeClassBody } from '@test/fakes/estree/fakeClassBody';
import { fakeDirective } from '@test/fakes/estree/fakeDirective';
import { fakeMethodDefinition } from '@test/fakes/estree/fakeMethodDefinition';
import { fakeModuleDeclaration } from '@test/fakes/estree/fakeModuleDeclaration';
import { fakePropertyDefinition } from '@test/fakes/estree/fakePropertyDefinition';
import { fakeStatement } from '@test/fakes/estree/fakeStatement';
import { fakeStaticBlock } from '@test/fakes/estree/fakeStaticBlock';

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
