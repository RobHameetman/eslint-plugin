import { Linter } from 'eslint';
import { fakeCustomRuleModule } from '@/utils/types/misc/CustomRuleModule/__test__';

const fakePlugin = {
	meta: {
		name: '@rob.hameetman/eslint-plugin',
		version: 'v0.0.1',
	},
	rules: {
		'custom-rule-example': fakeCustomRuleModule({
			meta: {
				name: 'custom-rule-example',
				category: 'best-practice',
				description: 'This is a custom rule example',
				recommended: true,
				schema: [],
			},
		}),
	},
	configs: {},
	processors: {},
};

export const mockWithPlugin = <T extends Linter.FlatConfigArray = Linter.FlatConfigArray>(
	config: T,
) => {
	const customConfig = config.at(-1);

	if (!customConfig) {
		throw new Error('No custom config found');
	} else if (!customConfig.rules) {
		throw new Error('No custom rules found');
	}

	const mockConfig = {
		...customConfig,
		plugins: {
			['test']: fakePlugin,
		},
		rules: Object.fromEntries(
			Object.entries(customConfig.rules)
				.map(([key, value]) => [key.replace(process.env.npm_package_name || '@rob.hameetman/eslint-plugin', 'test'), value]),
		),
	};

	return [
		...config.slice(0, -1),
		mockConfig,
	] as T;
};
