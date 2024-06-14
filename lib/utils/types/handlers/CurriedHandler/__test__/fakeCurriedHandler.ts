import { CurriedHandler } from '../CurriedHandler';

export const fakeCurriedHandler = ({
	invalid = false,
}: Record<string, unknown> = {}) =>
	jest.fn((_context) =>
		invalid
			? null
			: (_node) => {}) as CurriedHandler;
