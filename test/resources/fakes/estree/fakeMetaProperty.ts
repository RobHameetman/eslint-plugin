import type { MetaProperty } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeMetaProperty = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const metaProperty = fakeBaseExpression({
		perf,
		type: 'MetaProperty',
	}) as Partial<MetaProperty>;

	if (!perf) {
		metaProperty.meta = fakeIdentifier();
		metaProperty.property = fakeIdentifier();
	}

	return {
		...metaProperty,
		...overrideProps,
	} as MetaProperty;
};
