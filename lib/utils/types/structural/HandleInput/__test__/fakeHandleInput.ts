import { fakeCurriedHandler } from '@/utils/types/handlers/CurriedHandler/__test__/fakeCurriedHandler';
import { fakeSelectors } from '@/utils/types/listeners/Selectors/__test__/fakeSelectors';

export const fakeHandleInput = ({ ...overrideProps } = {}) => ({
	selectors: fakeSelectors(),
	onLint: fakeCurriedHandler(),
	...overrideProps,
});
