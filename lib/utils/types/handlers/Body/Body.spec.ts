import { isBody } from './Body';
import { isPropertyDefinition } from '@/utils/functions/estree/isPropertyDefinition';
import { fakeBody } from './__test__';

describe('isBody()', () => {
	it('should return true given a valid Body', () => {
		expect(isBody(fakeBody())).toBe(true);
	});

	it('should return false given an invalid Body', () => {
		expect(isBody(fakeBody({ type: 'test' }))).toBe(false);
	});
});
