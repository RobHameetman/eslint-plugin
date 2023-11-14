import type { ClassExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseClass } from './fakeBaseClass';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeClassExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const classExpression = fakeBaseClass({
		...fakeBaseExpression({
			perf,
			type: 'ClassExpression',
		}),
	}) as Partial<ClassExpression>;

	if (!perf) {
		faker.helpers.maybe(() => {
			classExpression.id = faker.helpers.weightedArrayElement([
				{ weight: 5, value: fakeIdentifier() },
				{ weight: 2.5, value: undefined },
				{ weight: 2.5, value: null },
			]);
		});
	}

	return {
		...classExpression,
		...overrideProps,
	} as ClassExpression;
};
