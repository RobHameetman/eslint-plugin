import type { Program } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeComments } from './fakeComments';
import { fakeDirective } from './fakeDirective';
import { fakeModuleDeclaration } from './fakeModuleDeclaration';
import { fakeStatement } from './fakeStatement';

export const fakeProgram = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const program = fakeBaseNode({
		perf,
		type: 'Program',
	}) as Partial<Program>;

	if (!perf) {
		program.body = [faker.helpers.arrayElement([
			fakeDirective,
			fakeModuleDeclaration,
			fakeStatement,
		])()];

		program.sourceType = faker.helpers.arrayElement([
			'script',
			'module',
		]);

		faker.helpers.maybe(() => {
			program.comments = fakeComments();
		});
	}

	return {
		...program,
		...overrideProps,
	} as Program;
};
