import { Rule as _Rule } from 'eslint';
import { Statement } from 'estree';
import { Categories } from '@/utils/enums/Categories';
import { CustomESLintRule } from '@/utils/types/structural/CustomESLintRule';
import { isBlockStatement } from '@/utils/functions/estree/isBlockStatement';

const DEFAULT_MAX_STATEMENTS = 1;

/**
 * A schema for providing options to this rule in a config:
 *
 * @example
 * ```TypeScript
 * {
 *   plugins: {
 *     plugin,
 *   },
 *   rules: {
 * 	   'plugin/custom-rule-example': ['error', 'always', { maximumStatements: 1 }]
 *   }
 * }
 * ```
 */
const schema = [
	{
		enum: [
			'always',
			'never',
		],
	},
	{
		type: 'object',
		properties: {
			maximumStatements: {
				type: 'integer',
			},
		},
		additionalProperties: false,
	},
	{
		type: 'object',
		properties: {
			minimumStatements: {
				type: 'integer',
			},
		},
		additionalProperties: false,
	},
] as const;

/**
 * @see https://eslint.org/docs/developer-guide/working-with-rules
 */
export default new CustomESLintRule(schema)
	.$meta({
		name: 'custom-rule-example',
		description: 'TODO: Add a short description here.',
		category: Categories.PossibleProblems,
	})
	.handle({
		selectors: [
			'FunctionDeclaration',
			'FunctionExpression[params.length>3]',
			'ArrowFunctionExpression',
		],
		onLint: ({ options, report }) =>
			(node) => {
				const [alwaysOrNever, { maximumStatements: maxStatements = 0 }, { minimumStatements: minStatements }] = options || [{
					maximumStatements: DEFAULT_MAX_STATEMENTS,
				}];

				const isLonelyIfStatement = (statement: Statement) => {
					return statement.type === 'IfStatement' && statement.alternate == null;
				}

				const isOffendingConsequent = (consequent: Statement) => {
					return (
						(consequent.type === 'ExpressionStatement' && maxStatements === 0) ||
						(consequent.type === 'BlockStatement' &&
							consequent.body.length > maxStatements)
					);
				}

				const isOffendingIfStatement = (statement: Statement) => {
					return (
						isLonelyIfStatement(statement) &&
						'consequent' in statement &&
						isOffendingConsequent(statement.consequent)
					);
				}

				const hasSimplifiableConditionalBody = (functionBody: Record<string, unknown>) => {
					const hasBody = 'body' in functionBody;

					const { body } =
						isBlockStatement(functionBody) && hasBody
							? functionBody
							: { body: [] };

					return (
						body.length === 1 &&
						isOffendingIfStatement(body[0])
					);
				}

				const { body } = node;

				if (hasSimplifiableConditionalBody(body)) {
					report({
						node: body,
						message: 'Prefer an early return to a conditionally-wrapped function body',
					});
				}
			}
		});
