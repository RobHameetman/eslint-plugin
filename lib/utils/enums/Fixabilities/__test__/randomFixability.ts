import { faker } from '@faker-js/faker';
import { Fixability, FIXABILITIES } from '../Fixabilities';

export const randomFixability =
	() => faker.helpers.arrayElement(FIXABILITIES) as Fixability;
