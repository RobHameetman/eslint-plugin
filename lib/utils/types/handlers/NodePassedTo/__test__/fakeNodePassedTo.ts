import { faker } from '@faker-js/faker';
import {
	fakeArrayExpression,
	fakeArrayPattern,
	fakeArrowFunctionExpression,
	fakeAssignmentExpression,
	fakeAssignmentPattern,
	fakeAwaitExpression,
	fakeBinaryExpression,
	fakeBlockStatement,
	fakeBreakStatement,
	fakeCallExpression,
	fakeCatchClause,
	fakeChainExpression,
	fakeClassBody,
	fakeClassDeclaration,
	fakeClassExpression,
	fakeConditionalExpression,
	fakeContinueStatement,
	fakeDebuggerStatement,
	fakeDoWhileStatement,
	fakeEmptyStatement,
	fakeExportAllDeclaration,
	fakeExportDefaultDeclaration,
	fakeExportNamedDeclaration,
	fakeExportSpecifier,
	fakeExpressionStatement,
	fakeForInStatement,
	fakeForOfStatement,
	fakeForStatement,
	fakeFunctionDeclaration,
	fakeFunctionExpression,
	fakeIdentifier,
	fakeIfStatement,
	fakeImportDeclaration,
	fakeImportDefaultSpecifier,
	fakeImportExpression,
	fakeImportNamespaceSpecifier,
	fakeImportSpecifier,
	fakeLabeledStatement,
	fakeLiteral,
	fakeLogicalExpression,
	fakeMemberExpression,
	fakeMetaProperty,
	fakeMethodDefinition,
	fakeNewExpression,
	fakeNode,
	fakeObjectExpression,
	fakeObjectPattern,
	fakeProgram,
	fakeProperty,
	fakeRestElement,
	fakeReturnStatement,
	fakeSequenceExpression,
	fakeSpreadElement,
	fakeSuper,
	fakeSwitchCase,
	fakeSwitchStatement,
	fakeTaggedTemplateExpression,
	fakeTemplateElement,
	fakeTemplateLiteral,
	fakeThisExpression,
	fakeThrowStatement,
	fakeTryStatement,
	fakeUnaryExpression,
	fakeUpdateExpression,
	fakeVariableDeclaration,
	fakeVariableDeclarator,
	fakeWhileStatement,
	fakeWithStatement,
	fakeYieldExpression,
} from '@@/fakes/estree';

export const fakeNodePassedTo = ({ ...overrideProps }: Record<string, unknown> = {}) =>
	faker.helpers.arrayElement([
		fakeProgram({ ...overrideProps }),
		{
			parent: fakeNode({ ...overrideProps }),
			...faker.helpers.arrayElement([
				fakeArrayExpression,
				fakeArrayPattern,
				fakeArrowFunctionExpression,
				fakeAssignmentExpression,
				fakeAssignmentPattern,
				fakeAwaitExpression,
				fakeBinaryExpression,
				fakeBlockStatement,
				fakeBreakStatement,
				fakeCallExpression,
				fakeCatchClause,
				fakeChainExpression,
				fakeClassBody,
				fakeClassDeclaration,
				fakeClassExpression,
				fakeConditionalExpression,
				fakeContinueStatement,
				fakeDebuggerStatement,
				fakeDoWhileStatement,
				fakeEmptyStatement,
				fakeExportAllDeclaration,
				fakeExportDefaultDeclaration,
				fakeExportNamedDeclaration,
				fakeExportSpecifier,
				fakeExpressionStatement,
				fakeForInStatement,
				fakeForOfStatement,
				fakeForStatement,
				fakeFunctionDeclaration,
				fakeFunctionExpression,
				fakeIdentifier,
				fakeIfStatement,
				fakeImportDeclaration,
				fakeImportDefaultSpecifier,
				fakeImportExpression,
				fakeImportNamespaceSpecifier,
				fakeImportSpecifier,
				fakeLabeledStatement,
				fakeLiteral,
				fakeLogicalExpression,
				fakeMemberExpression,
				fakeMetaProperty,
				fakeMethodDefinition,
				fakeNewExpression,
				fakeObjectExpression,
				fakeObjectPattern,
				fakeProperty,
				fakeRestElement,
				fakeReturnStatement,
				fakeSequenceExpression,
				fakeSpreadElement,
				fakeSuper,
				fakeSwitchCase,
				fakeSwitchStatement,
				fakeTaggedTemplateExpression,
				fakeTemplateElement,
				fakeTemplateLiteral,
				fakeThisExpression,
				fakeThrowStatement,
				fakeTryStatement,
				fakeUnaryExpression,
				fakeUpdateExpression,
				fakeVariableDeclaration,
				fakeVariableDeclarator,
				fakeWhileStatement,
				fakeWithStatement,
				fakeYieldExpression,
			])({ ...overrideProps }),
			...overrideProps,
		}
	]);
