import type { RegExpLiteral } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeBasePattern } from './fakeBasePattern';

export const fakeRegExpLiteral = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const regExpLiteral = fakeBaseExpression({
		...fakeBasePattern({
			...fakeBaseNode({
				perf,
				type: 'Literal',
				regex: {
					pattern: '',
					flags: '',
				}
			}),
		})
	}) as Partial<RegExpLiteral>;

	if (!perf) {
		regExpLiteral.value = faker.helpers.arrayElement([
			new RegExp('/^this|that$/ig'),
			undefined,
			null,
		]);

		if (regExpLiteral.value) {
			regExpLiteral.regex = {
				pattern: regExpLiteral.value.source,
				flags: regExpLiteral.value.flags,
			};
		}
	}

	return {
		...regExpLiteral,
		...overrideProps,
	} as RegExpLiteral;
};
