import type { Comment } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNodeWithoutComments } from './fakeBaseNodeWithoutComments';

export const fakeComment = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const comment = fakeBaseNodeWithoutComments({
		perf,
		type: faker.helpers.arrayElement(['Line', 'Block']),
	}) as Partial<Comment>;

	if (!perf) {
		faker.helpers.maybe(() => {
			comment.value = faker.lorem.sentence();
		});
	}

	return {
		...comment,
		...overrideProps,
	} as Comment;
};
