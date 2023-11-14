import { faker } from '@faker-js/faker';
import { LISTENER_TYPES } from '@enums/ListenerTypes';
import { ListenerTypeList } from '../ListenerTypeList';

export const fakeListenerTypeList = ({
	invalid = false,
}: Record<string, unknown> = {}) =>
	invalid
		? ['NotAListenerType']
		: faker.helpers.arrayElements(LISTENER_TYPES) as ListenerTypeList;
