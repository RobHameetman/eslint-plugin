import { PACKAGE_JSON } from '@/utils/constants/imports/PACKAGE_JSON';
import { TSCONFIG_JSON } from '@/utils/constants/imports/TSCONFIG_JSON';

export const IS_MODULE =
	PACKAGE_JSON?.type === 'module' ||
	(PACKAGE_JSON?.type === undefined && !(/^commonjs$/i.test(TSCONFIG_JSON?.compilerOptions?.module || '')));
