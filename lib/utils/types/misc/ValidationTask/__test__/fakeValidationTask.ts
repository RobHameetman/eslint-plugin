import { ValidationTask } from '../ValidationTask';

export const fakeValidationTask = ({
	invalid = false,
}: Record<string, unknown> = {}) =>
	jest.fn((_context) =>
		invalid
			? null
			: (_node) => {}) as ValidationTask;
