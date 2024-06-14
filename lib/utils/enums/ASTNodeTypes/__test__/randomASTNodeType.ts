import { faker } from '@faker-js/faker';
import { AST_NODE_TYPES } from '../ASTNodeTypes';

export const randomASTNodeType =
	() => faker.helpers.arrayElement(AST_NODE_TYPES);
