import type { BlockStatement, StaticBlock } from 'estree';
import { fakeBlockStatement } from './fakeBlockStatement';

export const fakeStaticBlock = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const staticBlock = fakeBlockStatement({
		perf,
		type: 'StaticBlock',
		...overrideProps
	}) as Partial<Omit<BlockStatement, 'type'>>;

	return {
		...staticBlock,
		...overrideProps,
	} as StaticBlock;
};
