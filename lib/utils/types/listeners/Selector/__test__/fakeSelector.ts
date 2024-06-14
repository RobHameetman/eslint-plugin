import { faker } from '@faker-js/faker';
import { Selector } from '@/utils/types/listeners/Selector';

export const randomSelector = () => {
	const attributeName = faker.lorem.word();
	const nestedAttributeName = `${faker.lorem.word()}.${faker.lorem.word()}`;

	const attributeValue = faker.helpers.arrayElement([
		faker.number.int(),
		`"${faker.lorem.word()}"`,
		`'${faker.lorem.word()}'`,
	]);

	return faker.helpers.arrayElement([
		`${faker.helpers.arrayElement(['ForStatement', 'IfStatement', 'FunctionDeclaration', 'VariableDeclaration'])}`,
		'*',
		`[${attributeName}]`,
		`[${attributeName}=${attributeValue}]`,
		`[${attributeName}=${faker.number.int()}]`,
		`[${attributeName}=/foo.*/]`,
		`[${attributeName}!=${attributeValue}]`,
		`[${attributeName}>${faker.number.int()}]`,
		`[${attributeName}<${faker.number.int()}]`,
		`[${attributeName}>=${faker.number.int()}]`,
		`[${attributeName}<=${faker.number.int()}]`,
		`[${nestedAttributeName}=${attributeValue}]`,
		`${faker.helpers.arrayElement(['FunctionDeclaration', 'VariableDeclarator'])} > Identifier`,
		`UnaryExpression > Literal`,
		`VariableDeclaration ~ VariableDeclaration`,
		`ArrayExpression > Literal + SpreadElement`,
		`FunctionExpression ReturnStatement`,
		`:not(${faker.helpers.arrayElement(['ForStatement', 'IfStatement'])})`,
		`:matches([${attributeName}] > :first-child, :last-child)`,
		`:first-child`,
		`:last-child`,
		`:nth-child(${faker.number.int({ min: 1, max: 5 })})`,
		`:nth-last-child(${faker.number.int({ min: 1, max: 5 })})`,
		`${faker.helpers.arrayElement([':statement', ':expression', ':declaration', ':function', ':pattern'])}`,
	]) as Selector;
};

export const fakeSelector = ({
	invalid = false,
}: Record<string, unknown> = {}) => {
	let selector: Selector | null = randomSelector();

	if (faker.helpers.maybe(() => true, { probability: 0.5 })) {
		selector = `${selector} ${randomSelector()}` as Selector;
	}

	if (invalid) {
		selector = null;
	}

	return selector as Selector;
}
