export * from './custom-rule-example';
export { default as CustomRuleExample } from './custom-rule-example';

import CustomRuleExample from './custom-rule-example';

export default {
	/**
	 * Add custom rules here.
	 *
	 * @example
	 * import { CustomRuleExample } from './rules';
	 *
	 * export default {
	 *   rules: {
	 *     'custom-rule-example': CustomRuleExample,
	 *   },
	 * };
	 */
	'custom-rule-example': CustomRuleExample,
};
