import { core, cypress, graphql, j, prettier, react, recommended, typescript } from './configs';
import rules from './rules';
import { IS_DEBUG } from './utils/constants/check/IS_DEBUG';
import { IS_DEV } from './utils/constants/check/IS_DEV';
import { IS_TEST } from './utils/constants/check/IS_TEST';
import { IS_PROD } from './utils/constants/check/IS_PROD';
import { USING_CYPRESS } from './utils/constants/deps/USING_CYPRESS';
import { USING_GRAPHQL } from './utils/constants/deps/USING_GRAPHQL';
import { USING_JEST } from './utils/constants/deps/USING_JEST';
import { USING_REACT } from './utils/constants/deps/USING_REACT';
import { USING_TESTING_LIBRARY } from './utils/constants/deps/USING_TESTING_LIBRARY';
import { USING_TYPESCRIPT } from './utils/constants/deps/USING_TYPESCRIPT';

if (IS_DEBUG) {
	console.log('-------------------');
	console.group(`plugin:${process.env.npm_package_name}`);

	console.info(`├── process.cwd: ${process.cwd()}`);
	console.info(`├── process.env.NODE_ENV: ${process.env.NODE_ENV}`);
	console.info(`├── isTest: ${IS_TEST}`);
	console.info(`├── isDevelopment: ${IS_DEV}`);
	console.info(`└── isProduction: ${IS_PROD}`);

	console.info(`${USING_TYPESCRIPT ? '✓' : '🆇'} TypeScript`);
	console.info(`${USING_REACT ? '✓' : '🆇'} React`);
	console.info(`${USING_JEST ? '✓' : '🆇'} Jest`);
	console.info(`${USING_TESTING_LIBRARY ? '✓' : '🆇'} @testing-library`);
	console.info(`${USING_CYPRESS ? '✓' : '🆇'} Cypress`);
	console.info(`${USING_GRAPHQL ? '✓' : '🆇'} Graphql`);

	console.groupEnd();
	console.log('-------------------');
}

export default {
	meta: {
		name: process.env.npm_package_name,
		version: process.env.npm_package_version,
	},
	rules,
	configs: {
		recommended,
		core,
		cypress,
		graphql,
		jest: j,
		prettier,
		react,
		typescript,
	},
	processors: {
		//
	},
};
