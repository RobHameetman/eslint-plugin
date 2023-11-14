import type { ClassBody } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeClassBody = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const classBody = fakeBaseNode({
		perf,
		type: 'ClassBody',
	}) as Partial<ClassBody>;

	if (!perf) {
		classBody.body = [] as ClassBody['body'];
	}

	return {
		...classBody,
		...overrideProps,
	} as ClassBody;
};
