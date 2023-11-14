import type { DebuggerStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';

export const fakeDebuggerStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const debuggerStatement = fakeBaseStatement({
		perf,
		type: 'DebuggerStatement',
		...overrideProps
	}) as Partial<DebuggerStatement>;

	return {
		...debuggerStatement,
		...overrideProps,
	} as DebuggerStatement;
};
