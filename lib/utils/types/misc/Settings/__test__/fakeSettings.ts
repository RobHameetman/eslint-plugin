// import { faker } from '@faker-js/faker';
import { Settings } from '../Settings';

export const fakeSettings = ({
	invalid = false,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const settings = {
		/**
		 * @TODO: Add required properties here with faker
		 */
	} as Partial<Settings>;

	/**
	 * @TODO: Add optional properties here with faker.helpers.maybe()
	 */
	// faker.helpers.maybe(() => {
	// 	settings.optionalProperty = '...';
	// });

	return invalid ? null : {
		...settings,
		...overrideProps,
	} as Settings;
};
