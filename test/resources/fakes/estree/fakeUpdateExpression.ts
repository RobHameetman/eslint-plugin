import type { UpdateExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';
import { randomUpdateOperator } from '../../utils/estree/randomUpdateOperator';

export const fakeUpdateExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const updateExpression = fakeBaseExpression({
		perf,
		type: 'UpdateExpression',
	}) as Partial<UpdateExpression>;

	if (!perf) {
		updateExpression.argument = fakeExpression();
		updateExpression.operator = randomUpdateOperator();
		updateExpression.prefix = faker.datatype.boolean();
	}

	return {
		...updateExpression,
		...overrideProps,
	} as UpdateExpression;
};
