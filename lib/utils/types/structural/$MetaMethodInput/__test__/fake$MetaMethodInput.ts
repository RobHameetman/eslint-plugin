import { faker } from '@faker-js/faker';
import { randomCategory } from '../../../../enums/Categories/__test__';
import { randomFixability } from '../../../../enums/Fixabilities/__test__';

export const fake$MetaMethodInput = ({ ...overrideProps } = {}) => {
	const $metaMethodInput: Record<string, unknown> = {
		category: randomCategory(),
		description: faker.lorem.sentence(),
		name: `no-${faker.word.sample().toLowerCase()}-${faker.word.sample().toLowerCase()}`,
	};

	faker.helpers.maybe(() => {
		$metaMethodInput.deprecated = true;
	});

	faker.helpers.maybe(() => {
		$metaMethodInput.fixable = randomFixability();
	});

	faker.helpers.maybe(() => {
		$metaMethodInput.hasSuggestions = true;
	});

	faker.helpers.maybe(() => {
		$metaMethodInput.recommended = true;
	});

	return {
		...$metaMethodInput,
		...overrideProps,
	}
};
