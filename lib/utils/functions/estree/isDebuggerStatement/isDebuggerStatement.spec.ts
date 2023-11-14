import { isDebuggerStatement } from './isDebuggerStatement';
import { fakeDebuggerStatement } from '@test/fakes/estree/fakeDebuggerStatement';

describe('isDebuggerStatement()', () => {
	it('should return true given a valid DebuggerStatement', () => {
		expect(isDebuggerStatement(fakeDebuggerStatement())).toBe(true);
	});

	it('should return false given an invalid DebuggerStatement', () => {
		expect(isDebuggerStatement(fakeDebuggerStatement({ type: null }))).toBe(false);
	});
});
