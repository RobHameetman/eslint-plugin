import { faker } from '@faker-js/faker';
import { fakeArrayExpressionHandler } from './fakeArrayExpressionHandler';
import { fakeArrayPatternHandler } from './fakeArrayPatternHandler';
import { fakeArrowFunctionExpressionHandler } from './fakeArrowFunctionExpressionHandler';
import { fakeAssignmentExpressionHandler } from './fakeAssignmentExpressionHandler';
import { fakeAssignmentPatternHandler } from './fakeAssignmentPatternHandler';
import { fakeAwaitExpressionHandler } from './fakeAwaitExpressionHandler';
import { fakeBinaryExpressionHandler } from './fakeBinaryExpressionHandler';
import { fakeBlockStatementHandler } from './fakeBlockStatementHandler';
import { fakeBreakStatementHandler } from './fakeBreakStatementHandler';
import { fakeCallExpressionHandler } from './fakeCallExpressionHandler';
import { fakeCatchClauseHandler } from './fakeCatchClauseHandler';
import { fakeChainExpressionHandler } from './fakeChainExpressionHandler';
import { fakeClassBodyHandler } from './fakeClassBodyHandler';
import { fakeClassDeclarationHandler } from './fakeClassDeclarationHandler';
import { fakeClassExpressionHandler } from './fakeClassExpressionHandler';
import { fakeConditionalExpressionHandler } from './fakeConditionalExpressionHandler';
import { fakeContinueStatementHandler } from './fakeContinueStatementHandler';
import { fakeDebuggerStatementHandler } from './fakeDebuggerStatementHandler';
import { fakeDoWhileStatementHandler } from './fakeDoWhileStatementHandler';
import { fakeEmptyStatementHandler } from './fakeEmptyStatementHandler';
import { fakeExportAllDeclarationHandler } from './fakeExportAllDeclarationHandler';
import { fakeExportDefaultDeclarationHandler } from './fakeExportDefaultDeclarationHandler';
import { fakeExportNamedDeclarationHandler } from './fakeExportNamedDeclarationHandler';
import { fakeExportSpecifierHandler } from './fakeExportSpecifierHandler';
import { fakeExpressionStatementHandler } from './fakeExpressionStatementHandler';
import { fakeForInStatementHandler } from './fakeForInStatemenHandler';
import { fakeForOfStatementHandler } from './fakeForOfStatementHandler';
import { fakeForStatementHandler } from './fakeForStatementHandler';
import { fakeFunctionDeclarationHandler } from './fakeFunctionDeclarationHandler';
import { fakeFunctionExpressionHandler } from './fakeFunctionExpressionHandler';
import { fakeIdentifierHandler } from './fakeIdentifierHandler';
import { fakeIfStatementHandler } from './fakeIfStatementHandler';
import { fakeImportDeclarationHandler } from './fakeImportDeclarationHandler';
import { fakeImportDefaultSpecifierHandler } from './fakeImportDefaultSpecifierHandler';
import { fakeImportExpressionHandler } from './fakeImportExpressionHandler';
import { fakeImportNamespaceSpecifierHandler } from './fakeImportNamespaceSpecifierHandler';
import { fakeImportSpecifierHandler } from './fakeImportSpecifierHandler';
import { fakeLabeledStatementHandler } from './fakeLabeledStatementHandler';
import { fakeLiteralHandler } from './fakeLiteralHandler';
import { fakeLogicalExpressionHandler } from './fakeLogicalExpressionHandler';
import { fakeMemberExpressionHandler } from './fakeMemberExpressionHandler';
import { fakeMetaPropertyHandler } from './fakeMetaPropertyHandler';
import { fakeMethodDefinitionHandler } from './fakeMethodDefinitionHandler';
import { fakeNewExpressionHandler } from './fakeNewExpressionHandler';
import { fakeObjectExpressionHandler } from './fakeObjectExpressionHandler';
import { fakeObjectPatternHandler } from './fakeObjectPatternHandler';
import { fakeProgramHandler } from './fakeProgramHandler';
import { fakePropertyHandler } from './fakePropertyHandler';
import { fakeRestElementHandler } from './fakeRestElementHandler';
import { fakeReturnStatementHandler } from './fakeReturnStatementHandler';
import { fakeSequenceExpressionHandler } from './fakeSequenceExpressionHandler';
import { fakeSpreadElementHandler } from './fakeSpreadElementHandler';
import { fakeSuperHandler } from './fakeSuperHandler';
import { fakeSwitchCaseHandler } from './fakeSwitchCaseHandler';
import { fakeSwitchStatementHandler } from './fakeSwitchStatementHandler';
import { fakeTaggedTemplateExpressionHandler } from './fakeTaggedTemplateExpressionHandler';
import { fakeTemplateElementHandler } from './fakeTemplateElementHandler';
import { fakeTemplateLiteralHandler } from './fakeTemplateLiteralHandler';
import { fakeThisExpressionHandler } from './fakeThisExpressionHandler';
import { fakeThrowStatementHandler } from './fakeThrowStatementHandler';
import { fakeTryStatementHandler } from './fakeTryStatementHandler';
import { fakeUnaryExpressionHandler } from './fakeUnaryExpressionHandler';
import { fakeUpdateExpressionHandler } from './fakeUpdateExpressionHandler';
import { fakeVariableDeclarationHandler } from './fakeVariableDeclarationHandler';
import { fakeVariableDeclaratorHandler } from './fakeVariableDeclaratorHandler';
import { fakeWhileStatementHandler } from './fakeWhileStatementHandler';
import { fakeWithStatementHandler } from './fakeWithStatementHandler';
import { fakeYieldExpressionHandler } from './fakeYieldExpressionHandler';

export const fakeHandler = () => faker.helpers.arrayElement([
	fakeArrayExpressionHandler,
	fakeArrayPatternHandler,
	fakeArrowFunctionExpressionHandler,
	fakeAssignmentExpressionHandler,
	fakeAssignmentPatternHandler,
	fakeAwaitExpressionHandler,
	fakeBinaryExpressionHandler,
	fakeBlockStatementHandler,
	fakeBreakStatementHandler,
	fakeCallExpressionHandler,
	fakeCatchClauseHandler,
	fakeChainExpressionHandler,
	fakeClassBodyHandler,
	fakeClassDeclarationHandler,
	fakeClassExpressionHandler,
	fakeConditionalExpressionHandler,
	fakeContinueStatementHandler,
	fakeDebuggerStatementHandler,
	fakeDoWhileStatementHandler,
	fakeEmptyStatementHandler,
	fakeExportAllDeclarationHandler,
	fakeExportDefaultDeclarationHandler,
	fakeExportNamedDeclarationHandler,
	fakeExportSpecifierHandler,
	fakeExpressionStatementHandler,
	fakeForInStatementHandler,
	fakeForOfStatementHandler,
	fakeForStatementHandler,
	fakeFunctionDeclarationHandler,
	fakeFunctionExpressionHandler,
	fakeIdentifierHandler,
	fakeIfStatementHandler,
	fakeImportDeclarationHandler,
	fakeImportDefaultSpecifierHandler,
	fakeImportExpressionHandler,
	fakeImportNamespaceSpecifierHandler,
	fakeImportSpecifierHandler,
	fakeLabeledStatementHandler,
	fakeLiteralHandler,
	fakeLogicalExpressionHandler,
	fakeMemberExpressionHandler,
	fakeMetaPropertyHandler,
	fakeMethodDefinitionHandler,
	fakeNewExpressionHandler,
	fakeObjectExpressionHandler,
	fakeObjectPatternHandler,
	fakeProgramHandler,
	fakePropertyHandler,
	fakeRestElementHandler,
	fakeReturnStatementHandler,
	fakeSequenceExpressionHandler,
	fakeSpreadElementHandler,
	fakeSuperHandler,
	fakeSwitchCaseHandler,
	fakeSwitchStatementHandler,
	fakeTaggedTemplateExpressionHandler,
	fakeTemplateElementHandler,
	fakeTemplateLiteralHandler,
	fakeThisExpressionHandler,
	fakeThrowStatementHandler,
	fakeTryStatementHandler,
	fakeUnaryExpressionHandler,
	fakeUpdateExpressionHandler,
	fakeVariableDeclarationHandler,
	fakeVariableDeclaratorHandler,
	fakeWhileStatementHandler,
	fakeWithStatementHandler,
	fakeYieldExpressionHandler,
])();
